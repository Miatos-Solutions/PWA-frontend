import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LegalData = [
    {
        title: 'Terms & Conditions',
        content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolo res et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.',
        content2: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
    },
    {
        title: 'Policies',
        content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.',
        content2: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
    },
    {
        title: 'Disclaimer',
        content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
        content2: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
    }
];

function Legal() {
    const [activeModal, setActiveModal] = useState(null);

    const openModal = (index) => {
        setActiveModal(index);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    return (
        <section className='h-[100vh] bg-white flex flex-col gap-9 p-6'>
            <nav className='pt-[40px]'>
                <Link to='/settings'>
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.978 9.999V13.25C7.978 13.662 7.643 14 7.226 14C7.038 14 6.851 13.929 6.708 13.794C4.933 12.109 1.763 9.102 0.312 7.725C0.112 7.536 0 7.273 0 7C0 6.726 0.112 6.464 0.312 6.275C1.763 4.898 4.933 1.89 6.708 0.207C6.851 0.0709998 7.038 0 7.226 0C7.643 0 7.978 0.337 7.978 0.75V4.001H16.998C17.529 4.001 18 4.471 18 5.001V8.999C18 9.529 17.529 9.999 16.998 9.999H7.978Z" fill="black" />
                    </svg>
                </Link>
            </nav>
            <h1 className='text-xl font-bold'>Legal</h1>
            <ul className='flex flex-col gap-3'>
                {LegalData.map((item, index) => (
                    <li 
                        key={index} 
                        className='flex flex-col h-[4rem] shadow-custom rounded-[6px]'
                        onClick={() => openModal(index)}
                    >
                        <div className='flex items-center justify-between h-[100%] pl-6 pr-6 cursor-pointer'>
                            <div className='flex gap-5 items-center'>
                                <h3 className='font-bold text-lg'>{item.title}</h3>
                            </div>
                            <span>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.665 12L0.25 10.5855L4.9195 5.998L0.25 1.4145L1.665 0L7.75 5.998L1.665 12Z" fill="black" />
                                </svg>
                            </span>
                        </div>
                    </li>
                ))}
            </ul>

            {activeModal !== null && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
                    <div className='bg-white p-6 rounded-lg max-w-md w-full flex flex-col gap-2'>
                        <div className='mt-10 flex justify-between items-center'>
                            <h2 className='text-xl font-bold'>Legal</h2>
                            <button 
                                onClick={closeModal} 
                                className='p-3 text-white rounded-lg'
                                >
                                <FaTimes className='text-gray-400 text-xl'/>
                            </button>
                        </div>
                        <h2 className='text-3xl font-bold pt-8 pb-4'>{LegalData[activeModal].title}</h2>
                        <div className='max-h-[80vh] overflow-y-auto pt-3 pb-[3rem] flex flex-col gap-5'>
                            <p>{LegalData[activeModal].content}</p>
                            <p>{LegalData[activeModal].content2}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Legal;
