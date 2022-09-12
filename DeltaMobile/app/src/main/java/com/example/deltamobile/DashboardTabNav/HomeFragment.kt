package com.example.deltamobile.DashboardTabNav

import android.content.Intent
import android.graphics.Color
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.deltamobile.DashboardTabNav.HomeFrag.*
import com.example.deltamobile.R
import com.github.mikephil.charting.charts.LineChart
import com.github.mikephil.charting.data.Entry
import com.github.mikephil.charting.data.LineData
import com.github.mikephil.charting.data.LineDataSet
import com.github.mikephil.charting.interfaces.datasets.ILineDataSet
import com.github.mikephil.charting.utils.Utils
import kotlinx.android.synthetic.main.dashboard__frag_home.*
import kotlinx.android.synthetic.main.dashboard__frag_home__card_cell.view.*
import kotlin.math.sin

/*
 * Home Fragment
 * A part of the Dashboard.
 * Represents a user's home screen.
 * All notifications show here.
 */
class HomeFragment : Fragment() ,CardAdapter.OnMyCardClickListener{
    // List of "Cards" (ie notifications).
    private var listCards: ArrayList<MyCard> = ArrayList<MyCard>()
    // The adapter that cards attach to.
    private lateinit var cardAdapter: CardAdapter;

    /*
    Note:
    TO FIX FRAGMENT NOT ATTACHED ERROR
    https://stackoverflow.com/questions/68458684/fragment-is-not-attached-to-a-context
     */
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        // create card objects
        this.listCards = getCardsList();

        // create card adapter
        cardAdapter = CardAdapter(this.requireContext(),listCards,this)

        // create recycler view
        val rvRecycler:RecyclerView = this.rvRecycler
        // how many cards in one row
        // ie SPAN_COUNT 2 means two cards per one row
        val SPAN_COUNT = 1

        // modify layout of recycle view
        rvRecycler.layoutManager = GridLayoutManager(this.requireContext(),SPAN_COUNT)
        // attach the adapter
        rvRecycler.adapter = this.cardAdapter

    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.dashboard__frag_home, container, false)
    }

    /*
     * Return a list of cards (Notifications)
     * As of [09/12/22] these cards are hard-coded. Please make these cards be generated based
     * on data specific to the user.
     */
    private fun getCardsList():ArrayList<MyCard>{
        // return a list of cards to populate the cards
        //
        val list = ArrayList<MyCard>()
        // create 12 notifications
        for(i in 0 until 12){
            // get the card icon
            val drawable = getCardIcon(i);
            // get the line chart (we use a library called MPChart)
            val card= MyCard(drawable,"Card $i","Date $i","Description $i",getCardLineChart(i));
            list.add(card)
        }
        return list;
    }
    /*
     * Return a line chart based on the index of a card.
     * @params index (int): the index the card is at in the array list of cards from `getCardsList`
     * @output lineChart (LineChart): an MPChart object representing a line chart.
     */
    private fun getCardLineChart(index:Int):LineChart{
        Utils.init(context)
        var x = arrayListOf<Float>()
        var y = arrayListOf<Float>()
        if(index%3 == 0){
            for(i in 0..9){
                x.add((i.toFloat()+ 0F))
                y.add(x.get(i)*x.get(i))
            }
        }else if(index%3 ==1){
            for(i in 0..9){
                x.add(i.toFloat()+0F)
                y.add(x.get(i))
            }
        }else{
            for(i in 0..9){
                x.add(i.toFloat())
                y.add(sin(x.get(i)))
            }
        }
        // return line chart for card
        // atm hardcoded for same values
        var entryList = mutableListOf<Entry>()
        for(i in 0 until x.size){
            entryList.add(
                Entry(x.get(i),y.get(i))
            )
        }
        // LineDataSet's list
        val lineDataSets = mutableListOf<ILineDataSet>()
        // put data in DataSet
        val lineDataSet = LineDataSet(entryList,"function of y and x")
        // format colors
        lineDataSet.color = Color.BLUE
        lineDataSets.add(lineDataSet)
        val lineData = LineData(lineDataSets)
        var lineChart = LineChart(this.context)
        lineChart.data = lineData

        lineChart.xAxis.apply{
            isEnabled = true
            textColor = Color.BLACK
        }
        return lineChart;
    }

    /*
     * Return an icon for a card.
     * @param i (int): the index the card is at in the ArrayList from `getCardsList`
     * @output: int representing the drawable object.
     */
    private fun getCardIcon(i:Int):Int{
        // depending on if i ==0,1,2 change image.
        val drawable = when(i%3){
            0->R.drawable.ic_baseline_accessibility_24
            1->R.drawable.ic_baseline_cloud_upload_24
            else ->R.drawable.ic_baseline_bluetooth_24
        }
        return drawable
    }

    /*
     * when a card is clicked, check the action of the card and do something.
     * @param position (int): The index of the card in `listCards`
     * @param action (string): The action the card is to perform.
     */
    override fun onMyCardClick(position: Int,action:String) {
        // sanity check
//        Toast.makeText(this.context,"hello", Toast.LENGTH_SHORT).show()
        // get card that was clicked
        //
        val myCard = listCards[position]

        // check out card action
        //
        when(action){
            // see more about a card
            // this actually goes into a new view
            //
            action__DETAIL_CARD->{
                this.goToDetail(myCard)
            }
            // delete a card
            //
            action__DELETE_CARD->{
                this.deleteCard(position)
            }
        }
    }
    /*
     * Delete a card.
     * @param position (Int): the position of the card in `listCards`.
     */
    private fun deleteCard(position:Int){
        // TODO:
        // Cards themselves should represent some item from a database.
        // This item should be marked as checked when you delete.
        // deletes card and updates adapter
        this.listCards.removeAt(position)
        rvRecycler.adapter?.notifyItemRemoved(position)
    }
    /*
     * Function to show a card in more detail.
     * moves to a new activity and views the card.
     * TODO:
     *  You should get all the values in the new Activity from a database. Maybe only send the id of a card and then grab
     * all relevant data based on that (while performing the necessary auth checks)
     * @param myCard (MyCard): the card you want to detail.
     */
    private fun goToDetail(myCard:MyCard){
        // enter detail card activity
        //
        val intent = Intent(this.context,DashboardHomeFragDetailCardActivity::class.java)
        // put intent values in
        // NOTE: In reality we should make use of some db and pull from there.
        //
        intent.putExtra(intent__MYCARD_TITLE,myCard.cardTitle)
        intent.putExtra(intent__MYCARD_DESCRIPTION,myCard.cardDescription)
        intent.putExtra(intent__MYCARD_DATE,myCard.cardDate)
        intent.putExtra(intent__MYCARD_IMG_RES,myCard.imgResource)

        startActivity(intent)
    }
}