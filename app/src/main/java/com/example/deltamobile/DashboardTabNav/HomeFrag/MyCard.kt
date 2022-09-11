package com.example.deltamobile.DashboardTabNav.HomeFrag

import com.robinhood.spark.SparkAdapter
import com.robinhood.spark.SparkView

// names for values to be sent by intents
//
val intent__MYCARD_TITLE = "MYCARD_TITLE"
val intent__MYCARD_DESCRIPTION = "MYCARD_DESCRIPTION"
val intent__MYCARD_DATE = "MYCARD_DATE"
val intent__MYCARD_IMG_RES = "MYCARD_IMG_RES"

// names for actions for onclicks
//
val action__DETAIL_CARD = "DETAIL_CARD"
val action__DELETE_CARD = "DELETE_CARD"

////
// Class to hold data for cards
//

//
// TODO:
// Make a parent Card class, from which graph cards can inherit
//
data class MyCard(
    val imgResource:Int,
    val cardTitle:String,
    val cardDate:String,
    val cardDescription:String,
    val svGraph:SparkView,
    );

// see here: https://github.com/robinhood/spark
class MySparkAdapter() :SparkAdapter(){
    private var alXVals= ArrayList<Float>();
    private var alYVals= ArrayList<Float>();

    constructor(alXVals:ArrayList<Float>,alYVals: ArrayList<Float>) : this() {
        this.alXVals = alXVals;
        this.alYVals = alYVals;
    }

    override fun getCount(): Int {
        return this.alXVals.size;
    }

    override fun getItem(index: Int): Any {
        return alYVals[index];
    }

    override fun getY(index: Int): Float {
        return alYVals[index];
    }

    override fun getX(index: Int): Float {
        return alXVals[index];
    }

}
