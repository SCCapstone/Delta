/** @jest-environment jsdom */
// https://www.youtube.com/watch?v=ML5egqL3YFE
import React from 'react'
import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react"
import StarSvg from '../src/components/csvFile/StarSvg'

import { Provider } from 'react-redux'
import store from '../src/store'

test('Should Render Star',()=>{
    const style = {fill:'none'}
    render(<Provider store={store}><StarSvg
        style={style}
        /></Provider>);
    const  star = screen.getByTestId('star');
    expect(star).toBeInTheDocument();
})