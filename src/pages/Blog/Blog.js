import React from 'react';

const Blog = () => {
    return (
        <div className=' '>
            <h1 className='text-5xl text-secondary py-10 underline border-secondary'>Question and Answer</h1>
            <div className=' grid grid-cols-2 lg:grid-cols-3 justify-center  px-10 py-10 gap-4  '>
                <div className=' text-justify px-5'>
                    <h1 className="text-xl font-bold text-info">Question Number : 1</h1>
                    <ul>
                        <li className='text-xl font-bold'><b>Question : </b> How will you improve the performance of a React Application</li>
                        <li className='text-justify '><b>Answer : </b> We have to make applications in a very simple and beautiful way for web development. Depending on how beautiful a web site will be. On the application. With a little code to make an application beautiful. The lower the code, the better. So security has to be ensured. The code needs to be cleared</li>
                    </ul>
                </div>
                <div className=' text-justify px-5'>
                    <h1 className="text-xl font-bold text-info">Question Number : 2</h1>
                    <ul>
                        <li className='text-xl font-bold'><b>Question : </b>  What are the different ways to manage a state in a React application</li>
                        <li className='text-justify '><b>Answer : </b>State is data we manange local state , global state , server state and url state. Local state manage one and another component.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.Data that comes from an external server that must be integrated with our UI state. Data that exists on our URLs, including the pathname and query parameters</li>
                    </ul>
                </div>
                <div className=' text-justify px-5'>
                    <h1 className="text-xl font-bold text-info">Question Number : 3</h1>
                    <ul>
                        <li className='text-xl font-bold'><b>Question : </b>  How does prototypical inheritance work?</li>
                        <li className='text-justify '><b>Answer : </b>Prototype inheritance is a feature of JavaScript. Anyone who does a code works like an heir. When he does a code, he gets a part of the code in his other code or he can work with that code</li>
                    </ul>
                </div>
                <div className=' text-justify px-5'>
                    <h1 className="text-xl font-bold text-info">Question Number : 4</h1>
                    <ul>
                        <li className='text-xl font-bold'><b>Question : </b>  Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</li>
                        <li className='text-justify '><b>Answer : </b>React if data cannot be loaded directly. When data is loaded in React it has the lowest length of data. If it does not have length then data cannot be loaded. And the set state has the minimum length. Due to which the state is used when any data needs to be loaded.</li>
                    </ul>
                </div>
                <div className=' text-justify px-5'>
                    <h1 className="text-xl font-bold text-info">Question Number : 5</h1>
                    <ul>
                        <li className='text-xl font-bold'><b>Question : </b>   What is a unit test? Why should write unit tests?</li>
                        <li className='text-justify '><b>Answer : </b>Unit testing involves testing applications in different ways. Its function is to serve the purpose for which each application was created. The work of unit testing is done by testing it in the highest way</li>
                        <li className='text-justify '><b>Answer : </b>Writing unit testing is very important for us as it will fulfill the purpose for which we create the application. And every application will be tested. So we should write unit testing</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Blog;