// /** @jest-environment jsdom */
// // https://www.youtube.com/watch?v=ML5egqL3YFE
// import React from 'react'
// import '@testing-library/jest-dom'
// import {render, screen} from "@testing-library/react"
// import Review from "../src/components/csvFile/Review"

// import { Provider } from 'react-redux'
// import store from '../src/store'

// test('Should Render Review',()=>{
//     const reviewData = {
//         id:1,
//         rating:5,
//         title:"TestTitle",
//         author_username:"TestUser",
//         formatted_date:"10/22/22",
//         author:1
//     }
//     const auth = {
//         user:{id:1}
//     }
//     render(<Provider store={store}><Review 
//         reviewData = {reviewData} auth={auth}
//         /></Provider>);
//     const headerElement = screen.getAllByTestId('header-1');
//     expect(headerElement).toBeInTheDocument();
// })