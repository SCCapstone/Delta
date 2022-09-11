package com.example.deltamobile.DashboardTabNav

import android.content.Intent
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.deltamobile.DashboardTabNav.HomeFrag.*
import com.example.deltamobile.R
import com.robinhood.spark.SparkView
import kotlinx.android.synthetic.main.dashboard__frag_home.*

// home screen on dashboard
//
class HomeFragment : Fragment() ,CardAdapter.OnMyCardClickListener{
    private lateinit var listCards: ArrayList<MyCard>;
    private lateinit var cardAdapter: CardAdapter;

    /*
    TO FIX FRAGMENT NOT ATTACHED ERROR
    https://stackoverflow.com/questions/68458684/fragment-is-not-attached-to-a-context

    We must do all operations involving a context here!
    This now includes card graph creation.
     */
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        // create cards
        this.listCards = getCardsList();

        // create card adapter
        cardAdapter = CardAdapter(this.requireContext(),listCards,this)

        val rvRecycler:RecyclerView = this.rvRecycler
        val SPAN_COUNT = 2
        rvRecycler.layoutManager = GridLayoutManager(this.requireContext(),SPAN_COUNT)
        rvRecycler.adapter = this.cardAdapter
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {


        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.dashboard__frag_home, container, false)
    }

    private fun getCardsList():ArrayList<MyCard>{
        val list = ArrayList<MyCard>()
        for(i in 0 until 12){
            val drawable = when(i%3){
                0->R.drawable.ic_baseline_accessibility_24
                1->R.drawable.ic_baseline_cloud_upload_24
                else ->R.drawable.ic_baseline_bluetooth_24
            }
            // give a sparkview
            // just random data for now
            //
            val alXData = arrayListOf(0F,1F,2F,3F,4F);
            val alYData = arrayListOf(0F,1F,2F,3F,4F);
            val spGraph = SparkView(this.requireContext(),null,R.id.svGraph) ;
            spGraph.adapter = MySparkAdapter(alXData,alYData);
            val card= MyCard(drawable,"Card $i","Date $i","Description $i",spGraph);
            list.add(card)
        }
        return list;
    }

    // add onclicks to the buttons
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
    private fun deleteCard(position:Int){
        // TODO:
        // Cards themselves should represent some item from a database.
        // This item should be marked as checked when you delete.
        // deletes card and updates adapter
        this.listCards.removeAt(position)
        rvRecycler.adapter?.notifyItemRemoved(position)
    }
    private fun goToDetail(myCard:MyCard){
        // enter detail card activity
        //
        val intent = Intent(this.context,DashboardHomeFragDetailCardActivity::class.java)
        intent.putExtra(intent__MYCARD_TITLE,myCard.cardTitle)
        intent.putExtra(intent__MYCARD_DESCRIPTION,myCard.cardDescription)
        intent.putExtra(intent__MYCARD_DATE,myCard.cardDate)
        intent.putExtra(intent__MYCARD_IMG_RES,myCard.imgResource)

        startActivity(intent)
    }
}