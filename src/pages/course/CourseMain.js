import { useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { courseBySlug, courses } from './courseData';
import './course.scss';

const ProgramCard = ({ course }) => <Link className="course-card" to={`/course/${course.slug}`}><span>{course.duration}</span><h2>{course.title}</h2><p>{course.description}</p><strong>View programme →</strong></Link>;

function EnquiryForm({ course }) {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const submit = (event) => { event.preventDefault(); setSubmitted(true); setTimeout(() => navigate('/course/thank-you'), 600); };
  return <form className="course-form" onSubmit={submit}><h2>Get your free career roadmap</h2><p>Our counsellor will contact you within 24 hours.</p><input aria-label="Full name" required placeholder="Full name *" /><input aria-label="Mobile number" required type="tel" placeholder="Mobile number *" /><input aria-label="City" placeholder="Your city" /><select aria-label="Education level" defaultValue=""><option value="" disabled>Education level</option><option>Class 10</option><option>Class 12</option><option>Graduate</option><option>Post Graduate</option></select><button type="submit">{submitted ? 'Thank you!' : `Enquire about ${course.short}`}</button><small>No application fee. Your details stay confidential.</small></form>;
}

const staticCoursePages = {
  'windows-admin': 'course-windows-admin.html',
  'networking-system-admin': 'course-networking-system-admin.html',
  'networking-ceh-cloud': 'course-networking-ceh-cloud.html',
  'data-science-ai': 'course-data-science-ai.html',
  'ai-ml-advanced': 'course-ai-ml-advanced.html',
  'full-stack-developer': 'course-full-stack-developer.html'
};

function ExactCoursePage({ file, title }) {
  const frameRef = useRef(null);
  const resizeFrame = () => {
    const documentElement = frameRef.current?.contentDocument?.documentElement;
    if (documentElement) frameRef.current.style.height = `${documentElement.scrollHeight}px`;
  };
  return <iframe ref={frameRef} className="course-exact-frame" title={title} src={`/course/${file}`} onLoad={resizeFrame} />;
}

function CourseLanding() { return <main className="course-page"><section className="course-intro"><div><p className="course-eyebrow">Explore S Research Solutions</p><h1>Career-ready IT programmes, built for your next role.</h1><p>Practical learning, mentor-led support and a placement-focused path across infrastructure, cybersecurity, data, AI and software development.</p><a href="#programmes" className="course-button">Explore programmes</a></div><aside><b>Live classes</b><span>Online & offline batches</span><b>Easy EMI options</b><span>Learn without upfront stress</span><b>Pan-India admissions</b><span>Career support wherever you are</span></aside></section><section id="programmes" className="course-list"><div className="course-section-title"><p className="course-eyebrow">Job Guarantee Career Programs</p><h1>Choose the path that fits your goals</h1></div><div className="course-grid">{courses.map((course) => <ProgramCard course={course} key={course.slug} />)}</div></section></main>; }

function CourseDetail() { const { slug } = useParams(); const course = courseBySlug[slug]; if (!course) return <CourseLanding />; return <main className="course-page"><section className="course-detail-hero"><div><Link className="course-crumb" to="/course">← All programmes</Link><p className="course-eyebrow">{course.duration} · {course.badge}</p><h1>{course.title}</h1><p>{course.description}</p><div className="course-tags">{course.why.map((item) => <span key={item}>✓ {item}</span>)}</div><a href="#apply" className="course-button">Enquire now</a></div><EnquiryForm course={course} /></section><section className="course-content"><article><p className="course-eyebrow">About the programme</p><h2>What you’ll gain</h2><p>{course.about}</p><div className="course-info"><div><b>Duration & schedule</b><p>{course.duration} of project-driven training, with live online and offline batches.</p></div><div><b>Placement support</b><p>Resume preparation, mock interviews and referrals to hiring partners.</p></div><div><b>Who can join</b><p>Freshers and graduates seeking practical, job-aligned technology skills.</p></div></div></article><article><p className="course-eyebrow">Curriculum</p><h2>What you will learn</h2><div className="course-learn">{course.learn.map((item) => <div key={item}>✦ <span>{item}</span><small>Practical training aligned to real workplace needs.</small></div>)}</div></article><article><p className="course-eyebrow">Career outcomes</p><h2>Where this can take you</h2><div className="course-roles">{course.roles.map((role) => <div key={role}><b>{role}</b><p>Build the confidence and practical portfolio for your first role.</p></div>)}</div></article><article className="course-placement"><p className="course-eyebrow">Placement support</p><h2>Supported from learning to interviews</h2><ol><li>Complete hands-on training and projects</li><li>Create an ATS-friendly resume and practice interviews</li><li>Receive job referrals across India</li><li>Start your career with continued placement support</li></ol></article></section><section className="course-related"><h2>Explore other career programmes</h2><div>{courses.filter((item) => item.slug !== course.slug).map((item) => <Link key={item.slug} to={`/course/${item.slug}`}>{item.short} →</Link>)}</div></section></main>; }

export function ThankYou() { return <main className="course-page course-thanks"><p className="course-eyebrow">Enquiry received</p><h1>Thank you — we’ll be in touch shortly.</h1><p>A career counsellor will contact you to discuss the best programme for your goals.</p><Link className="course-button" to="/course">Back to programmes</Link></main>; }
export default function CourseMain() {
  const { slug } = useParams();
  if (slug && staticCoursePages[slug]) return <ExactCoursePage file={staticCoursePages[slug]} title={courseBySlug[slug].title} />;
  return slug ? <CourseDetail /> : <CourseLanding />;
}
