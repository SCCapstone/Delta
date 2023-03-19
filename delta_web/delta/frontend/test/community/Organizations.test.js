import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import Organizations from '../../src/components/community/Organizations'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Router } from 'react-router-dom'

import { createMemoryHistory } from '@remix-run/router'

/*
Test creating an organization thumbnail
*/
test("Should create personal page",()=>{
    const history = createMemoryHistory();
    const initialAuthState = {
        token: "TEST",
        isAuthenticated: true,
        isLoading: false,
        user: { id: 1,
            username:"testUser",
            first_name:"first",
            last_name:"last",
            email:"email",
            bio:"bio",
            organizations:[{name:"1"},],
            followed_organizations:[{}]
         }
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

    // data to pass into thumb
    const orgs = 
    [
        {
            "name":"ValafarLab",
            "id":1,
            "description":"Description",
        }
    ]

    render(
        <Provider store = {store}>
            <Router location={history.location} navigator={history}>
                <Organizations
                    orgData={orgs}
                />
            </Router>
        </Provider>
    )
    const reviewElement = screen.getByTestId('organizations-1');

    // should render
    expect(reviewElement).toBeInTheDocument();
})