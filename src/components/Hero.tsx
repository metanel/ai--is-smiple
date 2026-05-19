import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  
  // האנימציות של הטקסט והכפתור - נעלמים ראשונים בתחילת הגלילה
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const textScale = useTransform(scrollY, [0, 300], [1, 0.9]);
  const textY = useTransform(scrollY, [0, 300], [0, 50]);
  
  // האנימציה של "גן עדן" - מסך של אור לבן שמכסה את הווידאו לחלוטין ומתמזג עם האתר
  const washOpacity = useTransform(scrollY, [150, 500], [0, 1]);

  return (
    // שינינו את צבע הרקע מ-navy ל-cream, והארכנו את זמן הגלילה
    <section id="home" className="relative h-[200vh] bg-cream" dir="rtl">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        
        {/* Background Video */}
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={`${import.meta.env.BASE_URL}earth.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
        
        {/* שכבת האור - מתחילה שקופה והופכת לאור לבן-שמנת שמכסה הכל */}
        <motion.div 
          style={{ opacity: washOpacity }} 
          className="absolute inset-0 bg-gradient-to-b from-white to-cream z-10" 
        />
        
        {/* Content */}
        <motion.div style={{ opacity: textOpacity, scale: textScale, y: textY }} className="relative z-20 max-w-4xl mx-auto w-full">
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
            <button className="bg-green text-white px-10 py-5 rounded-full text-xl font-bold shadow-[0_0_30px_rgba(4,120,87,0.4)] hover:shadow-[0_0_50px_rgba(4,120,87,0.6)] transition-all transform hover:scale-105 active:scale-95">
              התחילו את המסע
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: textOpacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 z-20"
        >
          <span className="text-sm font-medium mb-2 tracking-widest drop-shadow-md">גללו למטה</span>
          <ChevronDown size={32} />
        </motion.div>
      </div>
    </section>
  );
}
