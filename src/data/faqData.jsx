const faqData = [
  {
    id: 1,
    question: "Is Light Man safe to use?",
    answer: `Yes. Light Man uses bank-grade encryption to protect your payments and personal data.
    Your information is always secure, and every transaction is verified instantly.`,
  },
  {
    id: 2,
    question: "Which electricity providers are supported?",
    answer: `We currently support all major Nigerian electricity distribution companies (DisCos) including Ikeja Electric, Eko Electric, Abuja, Ibadan, Kano, Port Harcourt, Jos, and more.`,
  },
  {
    id: 3,
    question: "What is a DisCo?",
    answer: `An Electric Distribution Company (DisCo) is a company licensed to distribute electricity to homes and businesses of their customers.`,
  },
  {
    id: 4,
    question: "I can’t load my token",
    answer: (
            <ul>
                <li>
                    Here is a standard process you can follow
                </li>
                <li>
                    Ensure there is power supply in your area; Confirm the phase you are on has power
                    supply; Put off generators and inverters and change over to power supply; Key in
                    the numbers you received as token and Click on the “Enter” button it could be green or red.
                </li>
                <li>
                    Link errors- Insert new batteries in the space provided at the back of the keypad to
                    power on the device. If the device does not come on, press 3 to power up the battery                
                </li>
                <li>
                    Step 1- Plug the keypads preferable to a wall socket used for your freezer or cooker
                    (13Amps), and ensure the switch is on.
                </li>
                <li>
                    Step 2 -if you still have units on your meter, when there is power supply, plug the Keypad to a wall socket.
                </li>
                <li>
                    Step 3- Key in 5258 instead of the first four-meter digits followed by the consecutive meter digits while
                    omitting the last digit of the meter. I.e. 01011607946 then becomes 5258160794. Then press Send (blue or
                    red button as the case maybe).
                </li>
                <li>
                    Step 4- Load the token over again after the above has been done.
                </li>
                <li>
                    Kindly contact our 24-hour support team on 0913-001-3114 or send us an email at support@lightmanng.com
                    for further assistance
                </li>                            
            </ul>

            )
  }
  ,
  {
    id: 5,
    question: "Why did my meter reject the token?",
    answer: (

            <ul>
                <li>
                    Here is a standard process you can follow
                </li>
                <li>
                    Ensure there is power supply in your area; Confirm the phase you are on has power
                    supply; Put off generators and inverters and change over to power supply; Key in
                    the numbers you received as token and Click on the “Enter” button it could be green or red.
                </li>
                <li>
                    Link errors- Insert new batteries in the space provided at the back of the keypad to
                    power on the device. If the device does not come on, press 3 to power up the battery                
                </li>
                <li>
                    Step 1- Plug the keypads preferable to a wall socket used for your freezer or cooker
                    (13Amps), and ensure the switch is on.
                </li>
                <li>
                    Step 2 -if you still have units on your meter, when there is power supply, plug the Keypad to a wall socket.
                </li>
                <li>
                    Step 3- Key in 5258 instead of the first four-meter digits followed by the consecutive meter digits while
                    omitting the last digit of the meter. I.e. 01011607946 then becomes 5258160794. Then press Send (blue or
                    red button as the case maybe).
                </li>
                <li>
                    Step 4- Load the token over again after the above has been done.
                </li>
                <li>
                    Kindly contact our 24-hour support team on 0913-001-3114 or send us an email at support@lightmanng.com
                    for further assistance
                </li>                            
            </ul> 
            )
  }
  ,
  {
    id: 6,
    question: "I did not receive my token via SMS what can I do?",
    answer: (
            <ul>
                <li>
                    Token is ALWAYS sent to you through SMS. But sometimes, due to network delay 
                    issues which is beyond our control and totally dependent on the TELCOS 
                    (Telecommunication companies) [or if your mobile number was switched off
                    or unavailable at that particular moment the SMS was sent out or your number
                    has been registered on DND (do not disturb)], you might not receive the SMS.
                </li>
                <li>
                    The token is also sent via email if you provided an email address when you
                    created an account on LightmanNG. The token and other details of the transaction
                    are sent to your email. You can update your email address by clicking on view 
                    profile and providing your email address in the email field and click on “update profile
                </li>
                <li>
                    You can also access your tokens by clicking on "Transactions" on the Dashboard. In the
                    recent transactions table displayed, click on a transaction to access your tokens. On
                    the transaction details page; you can see the token as the first item on the page.
                    You would also see other details of the transaction on this page.
                </li>
                <li>
                    If you have any unviewed token. You can check the bell icon on the dashboard to view
                    your notifications. Click on it to view your token.
                </li>              
            </ul> 
            )
  },
  {
    id: 7,
    question: "Why did my transaction fail?",
    answer: (
            <ul>
                <li>
                    A transaction can fail for several reasons
                </li>
                <li>
                    As a result of bank network issues.
                </li>
                <li>
                    Your Bank (Issuer) was inoperative at the point of payment and lots more.
                </li>
                <li>
                    Kindly contact our 24-hour support team on 0913-001-3114 or send us an email 
                    at support@lightmanng.com for further assistance
                </li>              
            </ul>                  
            )
  },
  {
    id: 8,
    question: "I was debited for a failed transaction",
    answer: `Usually, you will receive a reversal from your bank within 24 hours. Kindly contact our
            24-hour support team on 0913-001-3114 or send us an email at support@lightmanng.com If
            you don’t receive a reversal.`,
  }
  // ... Add other questions here
];

export default faqData;