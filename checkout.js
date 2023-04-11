import { loadStripe } from "@stripe/stripe-js";

export async function checkout({lineItems}, id) {
    let stripePromise = null

    const getStripe = () => {
        if (!stripePromise) {
            stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY)
        }
        return stripePromise
    }
    console.log(`https://donate.chanceyouth.org/thanks?id=${id}`)

    const stripe = await getStripe()
    await stripe.redirectToCheckout({
        mode: 'payment',
        lineItems,
        successUrl: `https://donate.chanceyouth.org/thanks?id=${id}`,
        cancelUrl: window.location.origin,
        submit_type: 'donate', // set submit type to donate
        payment_intent_data: {
            description: 'Donation',
        }
    })
}