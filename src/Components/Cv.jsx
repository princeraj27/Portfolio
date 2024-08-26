import React from 'react'
import circle from '../assets/images/Ellipse.svg'
import star from '../assets/images/Group 1.svg'
import ellipse from '../assets/images/Ellipse 4.svg'
import line from '../assets/images/Line 1 (1).svg'
import github from '../assets/images/Github.svg'
import linkedin from '../assets/images/Vector.svg'
import line2 from '../assets/images/Line 1.svg'

const Cv = () => {
    return (
        <>
            <div className='flex flex-col items-start justify-center lg:px-24 px-5 py-16 sm:h-screen text-900 font-mon font-medium sm:text-base text-sm border-b border-99'>
                <div className='flex items-start'>
                    <img className='pt-11 hidden' src={circle} alt="Circle" />
                    <h1 className='flex flex-col items-start justify-center font-dm sm:text-8xl text-6xl sm:h-40 h-20 '>CV</h1>
                    <img className='sm:w-auto w-8' src={star} alt="Star" />
                </div>
                <div className='flex flex-col items-start self-stretch'>
                    <div className='flex sm:flex-row flex-col py-4 items-start sm:gap-8 gap-5 self-stretch'>
                        <div className='flex flex-col items-start sm:gap-2 flex-1'>
                            <p className='font-dm sm:text-5xl text-3xl'>Work Experience</p>
                            <div className='flex py-4 items-center self-stretch'>
                                <div className='flex px-2 pt-2 flex-col items-center self-stretch h-full'>
                                    <img src={ellipse} alt="Circle" />
                                    <img className='sm:h-12 h-10' src={line2} alt="Line" />
                                    <img src={ellipse} alt="Circle" />
                                </div>
                                <div className='flex flex-col items-start gap-4 flex-1'>
                                    <div className='flex flex-col items-start self-stretch'>
                                        <p className='font-bold'>UI/UX Designer</p>
                                        <p className='text-600 sm:text-sm text-xs'>Pixel Bharat | Jan’24 - Apr’24</p>
                                    </div>
                                    <div className='flex flex-col items-start self-stretch'>
                                        <p className='font-bold'>Frontend Developer - Intern</p>
                                        <p className='text-600 sm:text-sm text-xs'>Department of Holistic Education | Jan’24 - Apr’24</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-start sm:gap-2 flex-1'>
                            <p className='font-dm sm:text-5xl text-3xl'>Education</p>
                            <div className='flex py-4 items-center self-stretch'>
                                <div className='flex px-2 pt-2 flex-col items-center self-stretch h-full'>
                                    <img src={ellipse} alt="Circle" />
                                    <img className='sm:h-28 h-24' src={line} alt="Line" />
                                    <img src={ellipse} alt="Circle" />
                                </div>
                                <div className='flex flex-col items-start gap-4 flex-1'>
                                    <div className='flex flex-col items-start self-stretch'>
                                        <p className='font-bold'>B.Tech - Electronics and Communication</p>
                                        <p className='text-600 sm:text-sm text-xs'>IKG Punjab Technical University | 2020-24</p>
                                    </div>
                                    <div className='flex flex-col items-start self-stretch'>
                                        <p className='font-bold'>Senior secondary (XII) - Math</p>
                                        <p className='text-600 sm:text-sm text-xs'>75.06% | 2019</p>
                                    </div>
                                    <div className='flex flex-col items-start self-stretch'>
                                        <p className='font-bold'>Secondary (X)</p>
                                        <p className='text-600 sm:text-sm text-xs'>85% | 2017</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-start sm:gap-2 flex-1'>
                            <p className='font-dm sm:text-5xl text-3xl'>Contacts</p>
                            <div className='flex py-4 flex-col items-start gap-3'>
                                <div>
                                    <p>kumarishubham273@gmail.com</p>
                                    <p>+91 7482049954</p>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <img src={github} alt="GitHub" />
                                    <img src={linkedin} alt="LinkedIn" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex py-4 items-start sm:gap-2 flex-col self-stretch'>
                        <p className='font-dm sm:text-5xl text-3xl'>Competences</p>
                        <div className='flex sm:flex-row flex-col items-start sm:gap-2 self-stretch'>
                            <div className='flex py-4 items-start flex-1'>
                                <div className='flex px-2 pt-3 flex-col items-center self-stretch'>
                                    <img src={ellipse} alt="Circle" />
                                    <img className='sm:h-40 h-36' src={line} alt="Line" />
                                </div>
                                <div className='flex flex-col items-start gap-1 w-full'>
                                    <p className='flex flex-col items-start gap-1 self-stretch font-dm sm:text-3xl text-xl'>Industry Knowledge</p>
                                    <div className='flex py-4 items-start w-full sm:gap-0 gap-8'>
                                        <div className='flex flex-col items-start gap-2 flex-1 w-full sm:text-sm text-xs'>
                                            <p>Prototyping</p>
                                            <p>Design System</p>
                                            <p>Responsive Design</p>
                                            <p>Mobile Design</p>
                                            <p>Web Design</p>
                                        </div>
                                        <div className='flex items-start flex-1'>
                                            <div className='flex px-2 pt-2 items-center gap-5'>
                                                <img className='h-24' src={line} alt="Line" />
                                            </div>
                                            <div className='flex flex-col items-start gap-2 sm:text-sm text-xs'>
                                                <p>User Flow</p>
                                                <p>User Experience</p>
                                                <p>Wireframing</p>
                                                <p>Usability Testing</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex py-4 items-start flex-1'>
                                <div className='flex px-2 pt-3 flex-col items-center self-stretch'>
                                    <img src={ellipse} alt="Circle" />
                                    <img className='h-32' src={line} alt="Line" />
                                </div>
                                <div className='flex flex-col items-start gap-1 w-full'>
                                    <p className='flex flex-col items-start gap-1 self-stretch font-dm sm:text-3xl text-xl'>Instruments</p>
                                    <div className='flex py-4 items-start w-full sm:gap-0 gap-8'>
                                        <div className='flex flex-col items-start gap-2 flex-1 w-full sm:text-sm text-xs'>
                                            <p>Figma</p>
                                            <p>Adobe Photoshop</p>
                                            <p>Adobe Illustrator</p>
                                            <p>HTML, CSS, JavaScript</p>
                                        </div>
                                        <div className='flex items-start flex-1'>
                                            <div className='flex px-2 pt-1 items-center gap-5 self-stretch'>
                                                <img className='h-10' src={line2} alt="Line" />
                                            </div>
                                            <div className='flex flex-col items-start gap-2 w-full sm:text-sm text-xs'>
                                                <p>React JS</p>
                                                <p>Tailwind CSS</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center w-full '>
                    <button className='px-8 py-4 bg-900 text-primary rounded-full'>Download Resume</button>
                </div>
            </div>
        </>
    )
}

export default Cv
    