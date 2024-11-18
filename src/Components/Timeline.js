import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import '../../node_modules/react-vertical-timeline-component/style.min.css';
import '../../src/VerticalTimeline.css'
import '../../src/VerticalTimelineElement.css'
import React from 'react';
import { FaBrain, FaGrimace } from "react-icons/fa";
import { GiBrain } from 'react-icons/gi';
import { DateLabel } from "./DateLabel";








export const Timeline = () => {
    return (

        <div style={{ backgroundColor: 'lightgray' }}>

            <h1 style={{ textAlign: "center" }}>Historical Psychology Timeline</h1>
            <h2 style={{ textAlign: "center" }}>
                This text is aligned center by adding inline css
            </h2>

           



            
        <VerticalTimeline>

                <VerticalTimelineElement
                    className="vertical-timeline-element--left"                 
                    date={<DateLabel text="Early Foundations" />}
                    
                    iconStyle={{ background: 'rgb(140, 179, 217)', color: '#fff' }}//blue bg White Icon 
                    icon={<FaBrain />}
                >
                  
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--left"
                    contentStyle={{ background: 'rgb(140, 179, 217)', color: '#000' }}//white
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}//blue

                    date={<DateLabel text="1879 " />}
                    
                    iconStyle={{ background:  'rgb(255, 255, 255)', color: '#8cb3d9' }}// White bg blue Icon 
                    icon={<FaBrain />}
                >

                    <h3 className="vertical-timeline-element-title">Willhelm Wundt Father of Modern Psychology. Created the first laboratory for Experimental Psychology in Leipzig, Germany </h3>
                    <h4 className="vertical-timeline-element-subtitle"> 
                    <br></br> Founded <b>Structualism</b> with Edward.B Titchener.</h4>
                    <p>Using <b>Introspection - </b> Examined the structure of the mind by breaking it down to its basic elements.  
                    <b>  = Reductionist</b>
                    <br></br>Focussed on Human Emotions, Cognition & Human Behaviours.<br></br>
                        Was responsible for the training of thousands of students through his lectures and laboratories enabling hundreds to gain degrees in Psychology.
                        <br></br>
                        Major Influence on <b><i>Psychoanalysis & Cognitive Psychology</i></b> <br></br>
                         <a href="/Wundt" >  {/* Doc link to Image*/}
                        <img src={require('../../src/Images/Wundt.jpg')} // this is the image on timeline
                            style={{ width: '75px', height: '75px'}}/> </a> 
                        <br></br><a href="https://www.simplypsychology.org/structuralism.html#Titcheners-Structuralism" target='_blank'> Structualism and Titchener </a>
                        
                        
                        
                       
                       
                       
                    </p>
                </VerticalTimelineElement>
{/* REMOVE
                <VerticalTimelineElement
                    className="vertical-timeline-element--right"
                    contentStyle={{ background: 'rgb(140, 179, 217)', color: '#000' }}//white
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}//blue

                    date={<DateLabel text="1880-1927 " />}
                    
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#8cb3d9' }}//White bg blue Icon 
                    icon={<FaBrain />}
                >

                    <h3 className="vertical-timeline-element-title">Edward.B Titchener<br></br></h3>
                    <h4 className="vertical-timeline-element-subtitle"> 
                       Founded <b>Structualism</b> with Willhelm Wundt</h4>
                    <p>Using <b>Introspection:</b> Expanded on Wundt's system of Structualism.
                    <br></br>
                        Focussed on Human Emotions, Cognition & Human Behaviours.<br></br>
                        Was responsible for the training of thousands of students through his lectures and laboratories enabling hundreds to gain degrees in Psychology.
                        <br></br>
                        Influenced <b><i>Experimental Psychology, Psychoanalysis - Freud</i></b> <br></br>
                        Opposition to Structuralim resulted in the <b>Functionalist</b> Movement by William James in the USA
                        <br></br><a href="https://www.britannica.com/biography/Edward-B-Titchener" target='_blank'> Edward B. Titchener </a>
                        <br></br><a href="https://www.simplypsychology.org/structuralism.html#Titcheners-Structuralism" target='_blank'> Structualism and Titchener </a>
                        <br></br>
                        <a href="/Wundt" > Willhelm Wundt Doc </a>

                    </p>
                </VerticalTimelineElement>
*/}
                <VerticalTimelineElement
                    className="vertical-timeline-element--right"
                    contentStyle={{ background: 'rgb(140, 179, 217)', color: '#000' }}//blue box
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}//white arrow

                    date={<DateLabel text="1890" />}

                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#8cb3d9' }}//white bg blue Icon
                    icon={<FaBrain />}
                >
                    <h3 className="vertical-timeline-element-title">William James - Functionalism</h3>
                    <h3 className="vertical-timeline-element-subtitle">Emerged in Opposition to Structuralist approach. </h3>
                    <p>
                         <b>Rejected Structualism & Introspection</b> as too Subjective & Qualitative. Did not believe that consciousness could be studied by breaking it down.<br></br>
                        Influenced by Darwin's Theory of Evolution. Believed mental processes evolved to help individuals adapt, and that certain behaviours 
                        were <b>Instincts:</b> Shiver, Sneeze, Suckling, Migration, Hibernation etc. 
                        <br></br>Influenced the study of <b><i>Behaviourism, Cognitive & Evolutionary Psychology.</i></b> 
                        
                        <br></br><a href="/James" > William James Doc </a><br></br>
                        <a href="/Functionalism" > Functionalism Doc </a>
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--left"
                    contentStyle={{ background: 'rgb(140, 179, 217)', color: '#000' }}//white
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}//blue

                    date={<DateLabel text="1898 " />}
                    
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#8cb3d9' }}//White bg blue Icon 
                    icon={<FaBrain />}
                >

                    <h3 className="vertical-timeline-element-title"><a href="https://www.explorepsychology.com/thorndikes-law-of-effect-definition-and-examples/" target='_blank'>Edward Thorndike</a></h3>
                    <h4 className="vertical-timeline-element-subtitle"> 
                      Developed the <b>'Law of Effect'</b> </h4>
                        <p>Associated with Functionalism school of thought.
                            <br></br>Best known for his experiments involving cats learning to escape from boxes.
                        <br></br>Explaining how behaviours are learned. 
                       Major Influence on <b><i>Behaviourist Psychology, especially B.F. Skinner's theory of Operant Conditioning</i></b> <br></br>
                        
                        <br></br><a href="https://www.britannica.com/biography/Edward-B-Titchener" target='_blank'> Edward Thorndike </a>
                        <br></br><a href="https://www.simplypsychology.org/structuralism.html#Titcheners-Structuralism" target='_blank'>Edward Thorndike</a>
                        <br></br>
                        <a href="/Wundt" > Edward Thorndike Doc </a>

                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                   
                    className="vertical-timeline-element--right"
                    date={<DateLabel text="Psychoanalytic School" />}
                    
                    iconStyle={{ background: 'rgb(204, 204, 255)', color: '#fff' }}//lilac bg White Icon 
                    icon={<FaBrain />}
                >
                  
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--right" 
                    contentStyle={{ background: 'rgb(204, 204, 255)', color: '#000' }}//lilac
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}//white
                    date={<DateLabel text="1885 - 1939" />}
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#ccccff' }}// white bg lilsc icon
                    icon={<FaBrain />}
                    
                >
                    <h3 className="vertical-timeline-element-title"><a href="https://www.simplypsychology.org/sigmund-freud.html" target='_blank'>Sigmund Freud</a> PsychoAnalysis  </h3>
                    <h4 className="vertical-timeline-element-subtitle">Focussed on the Unconscious Mind, Dreams, Psychoanalysis</h4>
                   
                    <ol><b>Psychoanalytical Approaches:</b>        
                            <li>Behaviour is influenced by the unconscious mind</li>
                                <ol><li>Talking Therapy (Anna O)</li>
                                <li>Free Association</li>
                                <li>Dream Analysis</li>
                                </ol>
                            <li>Instincts (add doc)</li>
                                <ol><li>Life Instinct: Eros</li>
                                <li>Death Instinct: Thanatos</li>
                                <li>Dream Analysis</li>
                                </ol>
                            <li>Personality Structure</li>
                                <ol><li>Conscious, Pre-Conscious, Unconscious (add doc)</li>
                                <li>ID, Ego, SuperEgo</li></ol>
                            <li>Psychosexual Stages (add doc)</li>
                                    <ol><li>Oral (0-18 mnths)</li>
                                        <li>Anal (18-36 mnths)</li>
                                        <li>Phallic (3-6 yrs)</li>
                                        <ol><li>Oedipus Complex</li>
                                            <li>Electra Complex</li></ol>
                                        <li>Latent (6-12 yrs)</li>
                                        <li>Genital </li>
                                    </ol>

                    </ol>
                            
                    <p> 
                            
                        Began providing'Talking Therapy' after working alongside Charcot treating women with <b><i>hysteria.</i></b>                   
                      <br></br> 
                      <a href="/Wundt" >  {/* Doc link to Image*/}
                        <img src={require('../../src/Images/Wundt.jpg')} // this is the image on timeline
                            style={{ width: '75px', height: '75px'}}/> </a>
                    
                    <a href= "/Anna"><img src={require('../../src/Images/Dreams.jpg')} 
                            style={{ width: '75px', height: '75px'}}/> </a> 
                    
                    <br></br> 
                    <a href="/Wundt" > Psychoanalysis</a> {/*Add doc on Psychoanalysis*/}
                        Published 'Interpretation of Dreams' in 1900.    {/*Add  link to Iceberg Image*/}  
                        <a href= "/Iceberg"><img src={require('../../src/Images/Dreams.jpg')} 
                            style={{ width: '75px', height: '75px'}}/> </a> 
                        
                        <a href="/Wundt" > Dreams </a><br></br> {/*Add doc on dream analysis */}
                        
                        Freud developed the Iceberg analogy to explain the personality.
                        <a href="/Iceberg" >  {/*Add  link to Iceberg Image*/}
                        <img src={require('../../src/Images/freud_iceberg.jpg')} 
                            style={{ width: '75px', height: '75px'}}/> </a> 

                            <br></br>Personality consists of: <b>ID, Ego, and SuperEgo</b>
                            <a href="/Wundt" > Personality Doc </a><br></br> {/*Add doc on Personality Theory */}
                           Psychosexual Theory: Explain Personality<br></br> 
                           <a href="/Wundt" > Psychosexual Theory Doc </a><br></br> {/*Add doc on dream analysis */}{/*Add doc on Psychosexual Theory */}
                        
                        
                               
                        


                        Had a huge influence in the development of Human Behaviour and the Psyche.<br></br>
                        


                    </p>
                </VerticalTimelineElement>
         {/* 
                <VerticalTimelineElement
                    className="vertical-timeline-element--right"
                    contentStyle={{ background: 'rgb(204, 204, 255)', color: '#000' }}//lilac
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}//white
                    date={<DateLabel text="1937" />}
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#ccccff' }}// white bg lilsc icon
                    icon={<FaBrain />}
                >
                    <h3 className="vertical-timeline-element-title">Karen Horney, Psychoanalysis </h3>
                    <h4 className="vertical-timeline-element-subtitle">One of the first females trained in Psychoanalysis. </h4>
                    <p> Horney believed that the world around us, cultural, helps shape psychological traits, especially neurosis. <br></br> 
                        1937 Developed 'Basic Anxiety' - Four neurotic trends: <i>Affection, Submissiveness, Power & Withdrawal.</i> 
                        Add doc Karen Horney study on Anxiety  
                        Opposed to Freud opinion that theses traits were instincual.
                        1941 - She was barred from the NY Psychoanalytic Institute after clashing with fellow psychologists over Freuds theories.
                        Criticised Freud's views on women being inferior to men. <br></br>
                        In <b><i>"The Flight from Womanhood"</i></b> Horney disagreed with Freud's theory that women suffer from <b><i>'Penis Envy'</i></b> <br></br>
                        and suggested that men suffered from 'Womb Envy & Breast'
                        <br></br>Influenced <b><i>Erik Erikson's</i></b> theory of <b><i>Basic Mistrust</i></b> leading to <b>Psychosocial Psychology.</b>
                        <br></br>Had a huge influence in the diagnosis of neurotic conditions.
                        Influenced <b>Psychoanalytic Theory, Cultural and Humanistic Psychology & Feminine Psychology </b><br></br> 
                        
                        
                        <br></br><a href="https://www.simplypsychology.org/sigmund-freud.html" target='_blank'>Freud</a>/*Add doc on Karen Horney 


                    </p>
                </VerticalTimelineElement>
         */}
                <VerticalTimelineElement
              
                    className="vertical-timeline-element--left"
                    date={<DateLabel text="Behaviourist School" />}
                    
                    iconStyle={{ background: 'rgb(179, 255, 204)', color: '#fff' }}//green bg White Icon 
                    icon={<FaBrain />}
                >
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                    className="vertical-timeline-element--left"
                    contentStyle={{ background: 'rgb(179, 255, 204)', color: '#000' }}//green 
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}//white
                    date={<DateLabel text="1891-1902" />}
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#b3ffcc' }}// white bg green icon
                    icon={<FaBrain />}
                >
                    <h3 className="vertical-timeline-element-title">Ivan Pavlov </h3>
                    <h4 className="vertical-timeline-element-subtitle">Publishes finding on Classical Conditioning (Pavlov's Dogs)</h4>
                    <p>
                       Had a huge influence in the development of Human Behaviour and the Psyche.<br></br>
                        <a href="https://practicalpie.com/ivan-pavlov-biography-experiments/" target='_blank'>Pavlov</a>


                    </p>
                </VerticalTimelineElement>

                    <VerticalTimelineElement
                    className="vertical-timeline-element--right"
                    contentStyle={{ background: 'rgb(179, 255, 204)', color: '#000' }}//green 
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}//white
                    date={<DateLabel text="1913" />}
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#b3ffcc' }}// white bg green icon
                    icon={<FaBrain />}
                >
                    <h3 className="vertical-timeline-element-title">John B. Watson </h3>
                    <h4 className="vertical-timeline-element-subtitle">Publishes seminal work: "Psychology as the Behaviorist Views it" </h4>
                    <p>
                        <br></br>
                        <a href="https://www.simplypsychology.org/sigmund-freud.html" target='_blank'>Freud</a>


                    </p>
                </VerticalTimelineElement>

                
                    <VerticalTimelineElement
                    className="vertical-timeline-element--left"
                    contentStyle={{ background: 'rgb(179, 255, 204)', color: '#000' }}//green 
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}//white
                    date={<DateLabel text="1920" />}
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#b3ffcc' }}// white bg green icon
                    icon={<FaBrain />}
                >
                    <h3 className="vertical-timeline-element-title">John B. Watson & Rosalie Rayner</h3>
                    <h4 className="vertical-timeline-element-subtitle">Publish work on Classical Conditioning of fear</h4>
                    <p>Specifically the study of "Little Albert"
                        <br></br>
                        Had a huge influence in the development of Human Behaviour and the Psyche.<br></br>
                        <a href="https://practicalpie.com/little-albert-experiment/" target='_blank'>Little Albert</a>


                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--right"
                    contentStyle={{ background: 'rgb(179, 255, 204)', color: '#000' }}//green 
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}//white
                    date={<DateLabel text="1927" />}
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#b3ffcc' }}// white bg green icon
                    icon={<FaBrain />}
                >
                    <h3 className="vertical-timeline-element-title">B.F Skinner </h3>
                    <h4 className="vertical-timeline-element-subtitle">Radical Behaviourism.  Developed is the father of Operant Conditioning </h4>
                    <p>
                        <br></br>
                        <a href="https://www.simplypsychology.org/sigmund-freud.html" target='_blank'>Freud</a>


                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<FaBrain />}
                />
            </VerticalTimeline>

        </div>

    )
};

