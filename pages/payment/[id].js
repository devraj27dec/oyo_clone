import axios from "axios";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";


const Payment = () => {
    const router = useRouter();

    const makePayment = async() => {
        const val = {
            id: router.query?.id
        };

        const {data} = await axios.post(`/api/payment` , val);

        const options = {
            key: process.env.RAZORPAY_KEY,
            name: "Devraj",
            currency: data.currency,
            amount: data.amount,
            order_id: data.id,
            description: "Thank you!",
            handler: function (response) {},
            profile: {
                name: "Devraj",
                email: "devraj@gmail.com",
                contact: 879797032
            }

        }
        const paymentObj = new window.Razorpay(options)
        paymentObj.open();
    }

    useEffect(() => {
        makePayment()
    } , [])


    return (
        <>
          <Script src="http://checkout.razorpay.com/v1/checkout.js" />
        </>
    )

}


export default Payment;