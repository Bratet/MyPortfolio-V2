import * as React from 'react'
import Fade from 'react-reveal/Fade';

//define component
const SkillPage = () => {
    return(
    <div className="container m-auto mt-25 -mb-24 sm:px-12 md:px-20 max-w-screen-xl px-15 py-40 flex flex-col lg:flex items-center lg:justify-center lg:space-x-6">
        <Fade top>
            <h1 className="font-mono" style={{color: 'var(--primary)'}}>{'<'} skills{' />'}</h1>
        </Fade>
        <div className="flex flex-wrap md md:grid-cols-2 divide-x p-10">
            {/* Language */}
            <Fade left>
                <div className = "p-10">
                    <div className ="content highlight text-center" style={{color: 'var(--primary)'}}>
                        <h1 className="text-lg font-bold" id ="highlight1">Languages</h1>
                    </div>
                    <div className="flex mt-16 font-light" style={{color: 'var(--primary)'}}>
                        <h1>SQL</h1>
                        <div className="mx-20 grid grid-cols-10 gap-3">
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                        </div>
                    </div>
                    <div className="flex mt-16 font-light" style={{color: 'var(--primary)'}}>
                        <h1>C/C++</h1>
                        <div className="mx-20 grid grid-cols-10 gap-3">
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                        </div>
                    </div>
                    <div className="flex mt-16 font-light text-gray-900" style={{color: 'var(--primary)'}}>
                        <h1>Java</h1>
                        <div className="mx-20 grid grid-cols-10 gap-3">
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                        </div>
                    </div>

                    <div className="flex mt-16 font-light" style={{color: 'var(--primary)'}}>
                        <h1>Javascript</h1>
                        <div className="mx-16 grid grid-cols-10 gap-3">
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                        </div>
                    </div>
                    <div className="flex mt-16 font-light" style={{color: 'var(--primary)'}}>
                        <h1>Python</h1>
                        <div className="mx-20 grid grid-cols-10 gap-3">
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                        </div>
                    </div>
                    <div className="flex mt-16 font-light" style={{color: 'var(--primary)'}}>
                        <h1>CSS/SCSS</h1>
                        <div className="mx-16 grid grid-cols-10 gap-3">
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 bg-primary border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                            <span className="w-4 h-4 border border-square inset-0 transform hover:rotate-45 transition duration-300"></span>
                        </div>
                    </div>
                </div>
            </Fade>

            {/* Technology */}
            <Fade right>
                <div className="p-10">
                    <div className ="content highlight text-center" style={{color: 'var(--primary)'}}>
                        <h1 className="text-lg font-bold" id="highlight1">Technologies</h1>
                    </div>
                    <div className="relative mt-16">
                        <div className="flex relative pb-5">
                            <div className="ml-6 pt-5">
                                <div className="flex mb-12 space-x-14">
                                    <div>
                                        <img 
                                        className="w-16" 
                                        src="https://api.iconify.design/vscode-icons:file-type-gatsby.svg" 
                                        alt="gatsby logo"
                                        title="Gatsby"
                                        />
                                    </div>
                                    <div>
                                        <img 
                                        className="w-16" 
                                        src="https://api.iconify.design/vscode-icons:file-type-reactjs.svg"
                                        alt="react logo"
                                        title="React"/>
                                    </div>
                                    <div>
                                        {/* <img 
                                        className="w-28" 
                                        src="https://api.iconify.design/logos:express.svg"
                                        alt="express logo"
                                        title="Express"/> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" title="Express" aria-hidden="true" role="img" class="iconify iconify--logos" width="109.96" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 149">
                                            <path d="M3.332 115.629V58.648h71.144v-3.333H3.332V3.332h75.642V0H0v118.961h79.64v-3.332H3.333zm140.455-82.307l-29.49 38.821l-28.825-38.82H81.14l31.157 41.32L78.14 118.96h3.999l32.156-41.82l32.323 41.82h4.165l-34.322-44.319l31.323-41.32h-3.998zm16.994 114.963V94.97h.333c2 7.775 5.943 14.023 11.83 18.744c5.887 4.72 13.384 7.081 22.492 7.081c5.887 0 11.108-1.194 15.662-3.582s8.358-5.637 11.413-9.747c3.054-4.11 5.387-8.886 6.998-14.329c1.61-5.442 2.416-11.163 2.416-17.16c0-6.443-.834-12.386-2.5-17.828c-1.666-5.443-4.082-10.164-7.247-14.162c-3.166-3.999-6.998-7.11-11.497-9.33c-4.498-2.222-9.58-3.333-15.245-3.333c-4.332 0-8.358.639-12.079 1.916c-3.721 1.278-7.025 3.082-9.913 5.415a36.674 36.674 0 0 0-7.498 8.247c-2.11 3.166-3.721 6.637-4.832 10.414h-.333V33.322h-3.332v114.963h3.332zm34.655-30.657c-10.44 0-18.827-3.582-25.158-10.746c-6.331-7.164-9.497-17.467-9.497-30.907c0-5.554.778-10.83 2.333-15.828c1.555-4.998 3.804-9.386 6.747-13.162c2.944-3.777 6.582-6.776 10.913-8.997c4.332-2.222 9.22-3.333 14.662-3.333c5.554 0 10.414 1.111 14.579 3.333c4.165 2.221 7.609 5.248 10.33 9.08s4.776 8.22 6.165 13.162c1.388 4.943 2.082 10.191 2.082 15.745c0 4.999-.638 9.97-1.916 14.912c-1.277 4.943-3.249 9.386-5.915 13.33c-2.665 3.942-6.08 7.163-10.246 9.663c-4.166 2.499-9.192 3.748-15.079 3.748zm54.816 1.333V70.477c0-4.665.666-9.22 2-13.662c1.332-4.443 3.387-8.359 6.164-11.746c2.777-3.388 6.303-6.054 10.58-7.998c4.276-1.944 9.358-2.749 15.245-2.416v-3.332c-5.11-.11-9.58.444-13.412 1.666c-3.833 1.222-7.137 2.888-9.914 4.999c-2.777 2.11-4.998 4.581-6.664 7.414a33.15 33.15 0 0 0-3.666 9.08h-.333v-21.16h-3.332v85.64h3.332zm38.154-42.153h71.643c.223-5.887-.36-11.551-1.749-16.994c-1.388-5.443-3.61-10.275-6.664-14.495c-3.055-4.221-6.998-7.609-11.83-10.164c-4.832-2.555-10.58-3.832-17.244-3.832c-4.777 0-9.442 1-13.996 3c-4.554 1.999-8.553 4.914-11.996 8.746c-3.443 3.832-6.22 8.525-8.33 14.08c-2.11 5.553-3.166 11.884-3.166 18.993c0 6.331.722 12.246 2.166 17.744c1.444 5.498 3.665 10.275 6.664 14.329c3 4.054 6.86 7.192 11.58 9.413c4.72 2.222 10.413 3.277 17.078 3.166c9.774 0 17.994-2.75 24.658-8.247c6.665-5.499 10.608-13.246 11.83-23.243h-3.332c-1.444 9.442-5.138 16.523-11.08 21.243c-5.943 4.721-13.412 7.081-22.41 7.081c-6.109 0-11.274-1.055-15.495-3.165c-4.22-2.11-7.664-4.999-10.33-8.664c-2.665-3.666-4.637-7.97-5.914-12.913c-1.278-4.942-1.972-10.302-2.083-16.078zm68.311-3.332h-68.31c.332-5.998 1.443-11.385 3.331-16.161c1.889-4.777 4.36-8.859 7.415-12.246c3.054-3.388 6.609-5.97 10.663-7.748c4.054-1.777 8.414-2.666 13.079-2.666c5.554 0 10.44 1.028 14.662 3.083c4.22 2.055 7.747 4.86 10.58 8.414c2.832 3.554 4.97 7.692 6.414 12.412c1.444 4.721 2.166 9.692 2.166 14.912zm72.477-14.828h3.332c0-9.553-2.777-16.495-8.33-20.827c-5.555-4.332-13.108-6.498-22.66-6.498c-5.332 0-9.83.667-13.496 2c-3.665 1.332-6.664 3.054-8.997 5.164c-2.332 2.11-3.998 4.443-4.998 6.998c-1 2.555-1.5 4.999-1.5 7.331c0 4.665.833 8.386 2.5 11.163c1.666 2.777 4.276 4.943 7.83 6.498c2.444 1.11 5.22 2.11 8.331 3c3.11.888 6.72 1.832 10.83 2.831c3.665.89 7.275 1.778 10.83 2.666c3.554.889 6.692 2.083 9.413 3.582c2.722 1.5 4.943 3.416 6.665 5.749c1.721 2.332 2.582 5.387 2.582 9.163c0 3.666-.86 6.776-2.582 9.33a20.815 20.815 0 0 1-6.581 6.249c-2.666 1.61-5.638 2.776-8.914 3.498c-3.277.722-6.47 1.083-9.58 1.083c-10.108 0-17.856-2.249-23.243-6.747c-5.387-4.499-8.08-11.58-8.08-21.244h-3.333c0 10.775 2.916 18.661 8.747 23.66c5.832 4.998 14.468 7.497 25.909 7.497c3.665 0 7.358-.417 11.08-1.25c3.72-.833 7.053-2.193 9.996-4.082a22.592 22.592 0 0 0 7.164-7.33c1.833-3 2.75-6.665 2.75-10.997c0-4.11-.806-7.442-2.416-9.997c-1.611-2.554-3.721-4.665-6.332-6.331c-2.61-1.666-5.553-2.971-8.83-3.915a516.08 516.08 0 0 0-9.914-2.75a1726.675 1726.675 0 0 0-12.246-3.165c-3.498-.889-6.747-1.944-9.746-3.166c-2.888-1.222-5.193-2.971-6.915-5.248c-1.722-2.277-2.582-5.526-2.582-9.747c0-.777.222-2.166.666-4.165c.444-2 1.5-4.027 3.166-6.082c1.666-2.054 4.22-3.887 7.664-5.498c3.443-1.61 8.164-2.416 14.162-2.416c4.11 0 7.858.445 11.246 1.333c3.388.889 6.304 2.305 8.747 4.249c2.444 1.944 4.332 4.415 5.665 7.414c1.333 3 2 6.665 2 10.997zm77.141 0h3.332c0-9.553-2.776-16.495-8.33-20.827c-5.554-4.332-13.107-6.498-22.66-6.498c-5.331 0-9.83.667-13.495 2c-3.666 1.332-6.665 3.054-8.997 5.164c-2.333 2.11-3.999 4.443-4.999 6.998c-1 2.555-1.499 4.999-1.499 7.331c0 4.665.833 8.386 2.5 11.163c1.665 2.777 4.276 4.943 7.83 6.498c2.444 1.11 5.22 2.11 8.33 3c3.11.888 6.72 1.832 10.83 2.831c3.666.89 7.276 1.778 10.83 2.666c3.555.889 6.692 2.083 9.414 3.582c2.721 1.5 4.943 3.416 6.664 5.749c1.722 2.332 2.583 5.387 2.583 9.163c0 3.666-.861 6.776-2.583 9.33a20.815 20.815 0 0 1-6.58 6.249c-2.667 1.61-5.638 2.776-8.915 3.498c-3.276.722-6.47 1.083-9.58 1.083c-10.108 0-17.855-2.249-23.242-6.747c-5.388-4.499-8.081-11.58-8.081-21.244h-3.332c0 10.775 2.915 18.661 8.747 23.66c5.831 4.998 14.467 7.497 25.908 7.497c3.666 0 7.359-.417 11.08-1.25c3.72-.833 7.053-2.193 9.997-4.082a22.592 22.592 0 0 0 7.164-7.33c1.833-3 2.749-6.665 2.749-10.997c0-4.11-.805-7.442-2.416-9.997c-1.61-2.554-3.72-4.665-6.331-6.331c-2.61-1.666-5.554-2.971-8.83-3.915a516.071 516.071 0 0 0-9.914-2.75a1726.65 1726.65 0 0 0-12.246-3.165c-3.499-.889-6.748-1.944-9.747-3.166c-2.888-1.222-5.193-2.971-6.914-5.248c-1.722-2.277-2.583-5.526-2.583-9.747c0-.777.222-2.166.667-4.165c.444-2 1.5-4.027 3.165-6.082c1.666-2.054 4.221-3.887 7.664-5.498c3.444-1.61 8.164-2.416 14.163-2.416c4.11 0 7.858.445 11.246 1.333c3.388.889 6.303 2.305 8.747 4.249c2.444 1.944 4.332 4.415 5.665 7.414c1.333 3 2 6.665 2 10.997z" 
                                            style={{fill: 'var(--secondary)'}}></path></svg>
                                   
                                    </div>
                                    <div>
                                        <img 
                                        className="w-16" 
                                        src="https://api.iconify.design/vscode-icons:file-type-ionic.svg" 
                                        alt="ionic logo"
                                        title="Ionic"/>
                                    </div>
                                </div>

                                <div className="flex mb-12 space-x-14">
                                    <div>
                                        <img 
                                        className="w-11" 
                                        src="https://api.iconify.design/logos:bootstrap.svg" 
                                        alt="bootstrap logo"
                                        title="Bootstrap"/>
                                    </div>
                                    <div>
                                        <img 
                                            className="w-12" 
                                            src="https://api.iconify.design/vscode-icons:file-type-angular.svg"
                                            alt="angular logo"
                                            title="Angular"/>
                                        </div>
                                    <div>
                                        <img 
                                        className="w-12" 
                                        src="https://api.iconify.design/grommet-icons:figma.svg"
                                        alt="figma logo"
                                        title="Figma"/>
                                    </div>
                                    <div>
                                        <img 
                                        className="w-12" 
                                        src="https://api.iconify.design/logos:opencv.svg"
                                        alt="opencv logo"
                                        title="Open CV"/>
                                    </div>
                                </div>
                            
                                <div className="flex mb-12 space-x-14">
                                    <div>
                                        <img 
                                        className="w-14" 
                                        src="https://api.iconify.design/vscode-icons:file-type-git.svg" 
                                        alt="git logo"
                                        title="Git"/>
                                    </div>
                                    <div>
                                        <img 
                                        className="w-16" 
                                        src="https://api.iconify.design/logos:arduino.svg"
                                        alt="arduino logo"
                                        title="Arduino"/>
                                    </div>
                                    <div>
                                        <img 
                                        className="w-24" 
                                        src="https://api.iconify.design/logos:nodejs.svg" 
                                        alt="node logo"
                                        title="Node"
                                        />
                                        
                                    </div>
                                    <div>
                                        <img 
                                        className="w-12" 
                                        src="https://api.iconify.design/logos:postgresql.svg"
                                        alt="postgresql logo"
                                        title="PostgreSQL"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    </div>
)}
export default SkillPage