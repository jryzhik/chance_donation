import React from 'react'

export default function RecurringArea() {
    return (
        <div className="orido_tm_section">
            <script async
                src="https://js.stripe.com/v3/buy-button.js">
            </script>
            <div style={{display: "flex", justifyContent: "center", paddingTop: "3em"}}>
                <h3>Weekly Donation</h3>
            </div>
            <div className='subscriptionItems'>
                <stripe-buy-button
                    buy-button-id="buy_btn_1NjNTPHCi0SX3Bt1NEE1nuWD"
                    publishable-key="pk_live_51IQz0aHCi0SX3Bt1kcGe8R5aga19OLfNENQPcs5qBQ9KHBg3usTNLdnDC1jUdQi2EOEM0cyyZiyOkHcDnY1ddb4t00juHVL3qR"
                >
                </stripe-buy-button>

                <stripe-buy-button
                    buy-button-id="buy_btn_1NjNZRHCi0SX3Bt1gNnWYnBu"
                    publishable-key="pk_live_51IQz0aHCi0SX3Bt1kcGe8R5aga19OLfNENQPcs5qBQ9KHBg3usTNLdnDC1jUdQi2EOEM0cyyZiyOkHcDnY1ddb4t00juHVL3qR"
                >
                </stripe-buy-button>

                <stripe-buy-button
                    buy-button-id="buy_btn_1NjNdvHCi0SX3Bt1pVusoUVR"
                    publishable-key="pk_live_51IQz0aHCi0SX3Bt1kcGe8R5aga19OLfNENQPcs5qBQ9KHBg3usTNLdnDC1jUdQi2EOEM0cyyZiyOkHcDnY1ddb4t00juHVL3qR"
                >
                </stripe-buy-button>
            </div>
        </div>
    )
}
