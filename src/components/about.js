import React, { useState } from 'react'

export default function About() {
    const [btntext, setbtntext] = useState("Enable dark mode");
    const [containerstyle, setstyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });
    const handleonclick = () => {
        if (containerstyle.color === 'black') {
            setstyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setbtntext("Enable light mode");
        }
        else{
            setstyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtntext("Enable Dark mode");
        }
    }
    return (
        <div className='container' style={containerstyle}>
            <div className="aboutsection">

                <h1>About us</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut vel quibusdam inventore delectus illo veritatis, tempora fugit cumque, deleniti sed, iusto odio est culpa qui facere voluptate error exercitationem quidem dicta eos blanditiis explicabo asperiores! A, quos unde dicta explicabo maxime modi est. Esse eos quam itaque aliquid delectus aperiam dolor, modi est, voluptas illum accusantium fuga dolorum odit adipisci similique cum, quaerat quod autem laborum perspiciatis tempore. Quia voluptate quasi alias architecto voluptates illo facilis cumque beatae, suscipit quaerat optio vero nostrum similique, repudiandae nobis? Ipsum aliquid culpa quam nobis beatae magnam incidunt cupiditate provident! Blanditiis consectetur quasi quidem temporibus vero facere? Libero, error placeat sint maxime enim, numquam exercitationem corporis quae ratione ullam ipsa expedita vel in officia cumque voluptates corrupti, animi iusto deleniti. Possimus placeat facere repellendus aspernatur. Praesentium qui sapiente, cupiditate vero explicabo minima excepturi, itaque culpa quisquam cum animi quo quibusdam maiores fugit. Animi, eligendi. Odit facere tenetur officia eos ad, nisi ducimus adipisci cum quam, est dolor placeat. Harum ipsa ab exercitationem, minus libero excepturi cumque maxime accusamus eveniet in magni vitae. Repellat eligendi modi nisi dolore nam consectetur, eveniet fugit, quasi minus expedita natus qui. Vero minus ex, aliquam repudiandae, reprehenderit id sequi eos nam dolorem sit consequuntur, temporibus voluptatum laudantium quaerat beatae corporis quidem a itaque explicabo cupiditate pariatur! Earum quae inventore voluptatem deleniti blanditiis repudiandae accusamus labore eligendi nulla et minus voluptates ipsam non odit dolore, impedit praesentium explicabo culpa cupiditate facilis alias nam quisquam commodi. Voluptatem amet voluptas cum? Iusto explicabo nostrum odio ab saepe autem, reprehenderit libero eaque laborum, laudantium minima. Qui dolorum voluptates itaque inventore repudiandae reprehenderit odit nisi modi, unde non labore. Nam magnam aliquam quis reprehenderit eos expedita, reiciendis, veritatis ex debitis aut harum commodi provident eveniet soluta corrupti minus pariatur officiis nostrum aliquid recusandae alias.
                </p>
                <button className='btn' onClick={handleonclick}>{btntext}</button>
            </div>
        </div>
    )
}
