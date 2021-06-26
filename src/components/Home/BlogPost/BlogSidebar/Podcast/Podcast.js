import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophoneAlt } from '@fortawesome/free-solid-svg-icons';


const podcast = [
    {
        icon: <FontAwesomeIcon icon={faMicrophoneAlt} />,
        title: 'How to think like a Programmer',
        desc: "Learning to program is hard because programming feels different than other skills. But programming isn't about the languages - it is about the way one should think",
        link: `https://www.youtube.com/watch?v=azcrPFhaY9k`,
    },
    {
        icon: <FontAwesomeIcon icon={faMicrophoneAlt} />,
        title: '9 Things I Wish I Knew When I Started Programming',
        desc: "In this video I discuss 9 things I wish I knew before I started programming. Knowing these things would have made my journey in becoming a full-time iOS developer so much faster and easier. I hope this advice helps someone out there that's early in their career as a software developer.",
        link: `https://www.youtube.com/watch?v=EgpKu1tAVMY`,
    },
    {
        icon: <FontAwesomeIcon icon={faMicrophoneAlt} />,
        title: '7 Habits of Highly Effective Programmers (ft. ex-Google TechLead)',
        desc: "Over the years, you find that programming is a field littered with pitfalls.  I've seen so many health problems in my colleagues.  And mental burnout, low productivity, loss of focus, and getting lost in the weeds.  For those lucky enough to have landed a job in programming, they are not out of the woods just yet.  Learn my top 7 habits for being an effective coding machine.  ",
        link: `https://www.youtube.com/watch?v=W8ykZNSLDqE`,
    }
]

const Podcast = () =>
{
    return (
        <>
            <div className="px-2">
                <h1 className="text-2xl font-bold text-red-500 text-center mt-5">Recent Podcast</h1>
                {
                    podcast.map((pod) => (
                        <a target="_blank" href={pod.link} className="block mt-8 p-5 text-center md:text-left bg-gray-100 rounded-xl">
                            <span className="text-4xl text-red-400">{pod.icon}</span>
                            <p className="block mt-4 text-xl text-blue-900 font-bold">{pod.title}</p>
                            <p className="text-gray-500 mt-2">{pod.desc}</p>
                        </a>
                    ))
                }
            </div>
        </>
    );
};

export default Podcast;