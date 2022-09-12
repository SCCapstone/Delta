package com.example.deltamobile.DashboardTabNav

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.example.deltamobile.R

/*
 * Favorites Fragment
 * A part of the Dashboard.
 * Represents a user's favorite activities.
 * NOTE: may be extraneous.
 */
class FavoritesFragment : Fragment() {

    // Function called when view created
    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.dashboard__frag_favorites, container, false)
    }
}