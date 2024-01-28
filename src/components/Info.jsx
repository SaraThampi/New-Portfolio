import github from "/GitHub-Icon.png"
import linkedin from "/Linkedin.png"
import mail from "/mail.png"
import pdf from "/ST_CV.pdf"


export default function Info() {
    return(
        <div className="info-wrapper"> 
            <p>
                Hi, My name is Sara Thampi and I have just completed an intensive coding bootcamp, learning <strong>JavaScript, React</strong> and <strong>Node.js.</strong>
            </p>
            <p>
                When I was a child my dad bought an Amstrad computer for his accountancy job.  I discovered a guide for the programming language GW-Basic among his computer manuals and taught myself how to make little programs. This led me to take a GCSE in IT: We made pages in Teletext, little programs in BASIC and were the first people in school to have an email address. But our teacher warned us, that a Computer Science A-level was much harder and we needed much more knowledge than he had taught us.
            </p>
            <p>
                So I studied Maths, Physics and German instead. I was not talented at talking and I wanted to challenge myself: I decided to study a languages degree (German and Danish) at Edinburgh University; I loved the written work, but found the oral work challenging.
            </p>

            <p>
                I realised I needed to do something to change this, so I applied for jobs in retail. This helped slightly, but my progress was not as good as I hoped. It was only when I referred myself to counselling for social anxiety, my life started to change.
            </p>

            <p>
                I left retail and became a homeless shelter support worker. I helped the residents apply for benefits and housing and get health support. I realised many of them struggled with computers and really needed my help. This reminded me of how much I wanted to work in tech. So I googled how I could train as a computer programmer. I was one of 90 people selected for the School of Code bootcamp from over 1000 applicants. I totally loved learning to code in teams and haven&apos;t looked back since.
            </p>

            <p>
                Please click here to view my <a target="_blank" rel="noreferrer" href={pdf} className="text-link" ><strong>CV</strong></a>.
            </p>
            <div className="social-icons">
                <a target="_blank" href="https://github.com/SaraThampi" rel="noreferrer"><img src={github} height={40} alt="github link" /></a>
                <a target="_blank" href="https://www.linkedin.com/in/sara-thampi-236267289/" rel="noreferrer" ><img src={linkedin} height={40} alt="linkedin link" /></a>
                <a href="mailto:saraannthampi@gmail.com" ><img src={mail} height={40} alt="email me" /></a>
            </div>
        </div>
    )
}