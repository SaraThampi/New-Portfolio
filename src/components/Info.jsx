import github from "/GitHub-Icon.png"
import linkedin from "/Linkedin.png"
import mail from "/mail.png"
import pdf from "/ST_CV.pdf"


export default function Info() {
    return(
        <div className="info-wrapper"> 
            <p className="info-text">
                Hi, My name is Sara Thampi and I have just completed an intensive coding bootcamp with the School of Code, learning <strong>JavaScript, React</strong> and <strong>Node.js.</strong>
            </p>
            <p className="info-text">
                When I was a child my dad bought an Amstrad computer for his accountancy job.  I discovered a guide for the programming language GW-Basic among his computer manuals and taught myself how to make little programs. This led me to take a GCSE in IT: We made pages in Teletext, little programs in BASIC, and were the first people in school to have an email address. I wanted to study further, but our teacher told us we needed much more knowledge to study a Computer Science A-level. 
            </p>
            <p className="info-text">
                So I studied Maths, Physics, and German instead. I was fascinated with different cultures and ways of seeing the world, so I decided to study for a language degree (German and Danish) at Edinburgh University; I loved the written work, but found the oral work challenging.
            </p>

            <p className="info-text">
                I realised I needed to focus on developing communication skills, so I applied for jobs in retail. I enjoyed working in teams, and getting to know about our customers&apos; lives. Just before lockdown, I referred myself to counselling for social anxiety, and my confidence started improving significantly.
            </p>

            <p className="info-text">
                I left retail and became a homeless shelter support worker. I helped the residents apply for benefits and housing and get health support. I realised many of them struggled with computers and needed my help. I came to the sad realisation, that without help, many of them are denied access to the support available to them. They were also forced to rely on the aid of others instead of learning to be self-sufficient. This reminded me of how much I wanted to work in tech. So I googled how I could train as a computer programmer. I was one of 90 people selected for the School of Code bootcamp from over 1000 applicants. I totally loved learning to code in teams and haven&apos;t looked back since.
            </p>
            <p className="info-text">
                I loved working in teams and collaborating with different people with varied perspectives. I would love to create tech that is accessible to all people, not just those who are technically literate. I think it is important that everyone should be able to use technology and gain its benefits.
            </p>

            <p className="info-text">
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