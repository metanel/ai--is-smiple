/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Target, Lightbulb, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-cream-alt" dir="rtl">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Left/Top: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="absolute inset-0 bg-green/10 rounded-[40px] transform rotate-3" />
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVYG3235LoFrt-ku6LHTzvaCz-TMa47DgOrG9yPwMw8vwthZ9994i0GlrxSfxa8SAkTVEG4vmtV_u2uIMLZGbDqvs8iDjm-9a55X2IBUmXEDPRxMEuGrUHOSEvP9Qok09a7MPbwx9yhRKW71rcqktpZ-GW9TBEFR5HZrsmQxXZBW_a9HbuprRSBvhXwwL6ofbPFQSmxrVhKQG67u39bWtzSSX5l3K3esOOnUCIbccdFcX16GqCMn9K9jmCZ6odvPx_kbwK_ZPnEtJe" 
            alt="מתנאל - מומחה לבינה מלאכותית" 
            className="relative z-10 w-full h-auto aspect-[4/5] object-cover rounded-[32px] shadow-2xl"
          />
        </motion.div>

        {/* Right/Bottom: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-navy">
              נעים מאוד, אני <span className="marker-highlight">מתנאל</span>
            </h2>
            <p className="text-xl text-navy/70 leading-relaxed italic">
              "למרות שמעולם לא הייתי איש טכני במיוחד, מצאתי את עצמי מוקסם מהאפשרויות שהבינה המלאכותית פותחת בפנינו."
            </p>
            <p className="text-lg text-navy/70 leading-relaxed">
              בשנת 2026 פיתחתי שיטה פשוטה שמנגישה את הכלים העוצמתיים האלה לכל אחד, ללא צורך בשורת קוד אחת. המשימה שלי היא להחזיר לכם את הזמן שלכם, תוך כדי הגדלת העסק לשיאים חדשים.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              { icon: <Target className="text-orange" />, text: "פשטות מעל הכל", desc: "הנגשה של טכנולוגיה מורכבת לכלים שאפשר להפעיל מהספה." },
              { icon: <Lightbulb className="text-orange" />, text: "תוצאות אמיתיות", desc: "התמקדות במה שמביא לקוחות ומכירות, ולא בבאזז וורדס." },
              { icon: <Users className="text-orange" />, text: "להשאיר את זה אנושי", desc: "הטכנולוגיה היא רק כלי, המטרה היא תמיד חיבור אנושי רחב יותר." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 border border-white/20"
              >
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-navy">{item.text}</h4>
                  <p className="text-navy/60 leading-tight">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
