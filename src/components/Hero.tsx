import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const startJourney = () => {
    if (containerRef.current) {
      window.scrollTo({
        top: containerRef.current.offsetHeight - window.innerHeight,
        behavior: 'smooth'
      });
    }
  };
  
  // שלב 1: מסך פתיחה (Welcome) - המילים והכפתור מתפוגגים ב-20% הראשונים של הגלילה
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  
  // שלב 2 + 3: הכותרת השנייה מופיעה ב-25% ונשארת יציבה במהלך ה-Fade ללבן ולקרם
  const nextTextOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.85, 0.95], [0, 1, 1, 0]);
  const nextTextY = useTransform(scrollYProgress, [0.2, 0.3], [30, 0]);
  
  // שלב 3: אפקט המעבר (The Web) - שינוי הדרגתי ללבן מוחלט ואז לצבע הקרם של האתר
  const whiteWashOpacity = useTransform(scrollYProgress, [0.4, 0.65], [0, 1]);
  const creamWashOpacity = useTransform(scrollYProgress, [0.65, 0.9], [0, 1]);

  return (
    // הגדלנו את הגובה ל-300vh ומעבירים אחוזים יחסיים למניעת שטחים מתים
    <section id="home" ref={containerRef} className="relative h-[300vh] bg-cream">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        
        {/* Background Video */}
        <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover z-0">
          <source src={`${import.meta.env.BASE_URL}earth.mp4`} type="video/mp4" />
        </video>
        
        {/* שכבת שטיפת האור הלבן (Fade to White) */}
        <motion.div 
          style={{ opacity: whiteWashOpacity }} 
          className="absolute inset-0 bg-white z-10" 
        />

        {/* שכבת שטיפת צבע הקרם של האתר */}
        <motion.div 
          style={{ opacity: creamWashOpacity }} 
          className="absolute inset-0 bg-cream z-[11]" 
        />
        
        {/* תוכן מסך הפתיחה - שלב 1 */}
        <motion.div style={{ opacity: textOpacity, scale: textScale }} className="absolute inset-0 flex flex-col justify-center items-center z-20 pointer-events-auto">
          <div className="max-w-4xl mx-auto w-full px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight drop-shadow-lg"
            >
              ברוכים הבאים <br />
              <span className="text-green drop-shadow-md">לעולם החדש</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button onClick={startJourney} className="bg-green text-white px-10 py-5 rounded-full text-xl font-bold shadow-[0_0_30px_rgba(4,120,87,0.4)] hover:shadow-[0_0_50px_rgba(4,120,87,0.6)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer">
                התחילו את המסע
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* תוכן המעבר אל המשך האתר - שלב 3 */}
        <motion.div style={{ opacity: nextTextOpacity, y: nextTextY }} className="absolute inset-0 flex flex-col justify-center items-center z-30 pointer-events-none">
          <div className="max-w-4xl mx-auto w-full px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 leading-tight">
              לייצר לקוחות בעידן הבינה המלאכותית <br />
              <span className="marker-highlight">זה פשוט</span>.
            </h2>
          </div>
        </motion.div>

        {/* חץ גלילה */}
        <motion.div 
          style={{ opacity: arrowOpacity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 z-20"
        >
          <span className="text-sm font-medium mb-2 tracking-widest drop-shadow-md">גללו למטה</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
