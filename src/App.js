import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {
	Header,
	HeaderMenu,
	Footer,
	Overview
} from "src/components/index"

import "./App.scss"

function App() {
	const [cartItems, setCartItems] = useState([])

	const addToCart = newItem => {
		// Check if item already exists in cart and update quantity
		const existingItem = cartItems.find(item => item.id === newItem.id)
		if (existingItem) {
			setCartItems(
				cartItems.map(item =>
					item.id === newItem.id
						? { ...item, quantity: item.quantity + 1 }
						: item,
				),
			)
		} else {
			setCartItems([...cartItems, { ...newItem, quantity: 1 }])
		}
	}

	const removeFromCart = itemId => {
		setCartItems(cartItems.filter(item => item.id !== itemId))
	}

	return (
		<Router>
			<div className="App">
				<Header />
				<HeaderMenu />
				<Routes>
					<Route path="/" element={<Overview />} />
					{/* <Route path="/products/:productId" element={<ProductDetails />} />
					<Route
						path="/cart"
						element={
							<ShoppingCart
								cartItems={cartItems}
								addToCart={addToCart}
								removeFromCart={removeFromCart}
							/>
						}
					/>
					<Route
						path="/checkout"
						element={
							<Checkout
								cartItems={cartItems}
								totalPrice={calculateTotalPrice(cartItems)}
							/>
						}
					/> */}
				</Routes>
				<Footer />
			</div>
		</Router>
	)
}

function calculateTotalPrice(cartItems) {
	return cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0,
	)
}

export default App
