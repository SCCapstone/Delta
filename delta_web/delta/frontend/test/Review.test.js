/** @jest-environment jsdom */
// https://www.youtube.com/watch?v=ML5egqL3YFE
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import Review from "../src/components/csvFile/Review"

import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Router } from 'react-router-dom'

import { createMemoryHistory } from '@remix-run/router'

/*
Test rendering a review
*/
test('Should Render Review', () => {
    const history = createMemoryHistory();
    const reviewData = {
        id: 1,
        rating: 5,
        title: "TestTitle",
        author_username: "TestUser",
        formatted_date: "10/22/22",
        author: 1
    }
    const initialAuthState = {
        token: "TEST",
        isAuthenticated: true,
        isLoading: false,
        user: { id: 1 }
    }
    const auth = function (state = initialAuthState, action) {
        return { ...state }
    }
    const reducers = combineReducers({
        auth
    })
    const initialState = {}
    const middleware = [thunk]
    const store = createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(...middleware))
    )
    render(<Provider store={store}>
        <Router location={history.location} navigator={history}>
            <Review
                reviewData={reviewData} auth={auth}
            />
        </Router>
    </Provider>);
    const reviewElement = screen.getByTestId('review-1');


    // should render
    expect(reviewElement).toBeInTheDocument();
})