/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Pencil, Sofa, Home, BarChart3, Bot } from 'lucide-react';

const steps = [
  {
    num: "01",
    icon: <Pencil className="text-green" size={32} />,
    title: "כתיבת תסריטים וקופירייטינג",
    desc: "למדו כיצד לבקש מה-AI לכתוב עבורכם טקסטים ממירים ומדויקים לכל פלטפורמה."
  },
  {
    num: "02",
    icon: <Sofa className="text-green" size={32} />,
    title: "יצירת סרטונים \"מהספה\"",
    desc: "הפקת סרטוני וידאו איכותיים ומושכים, מבלי לצאת מהבית או להזדקק לציוד יקר."
  },
  {
    num: "03",
    icon: <Home className="text-green" size={32} />,
    title: "הקמת בית דיגיטלי חינמי",
    desc: "בניית דפי נחיתה מקצועיים ומהירים שממירים גולשים ללקוחות במינימום מאמץ."
  },
  {
    num: "04",
    icon: <BarChart3 className="text-green" size={32} />,
    title: "שיווק חכם ללא קמפיינר",
    desc: "שימוש בכלים חכמים לאופטימיזציה של מודעות והגעה לקהל היעד המדויק ביותר."
  },
  {
    num: "05",
    icon: <Bot className="text-green" size={32} />,
    title: "שירות לקוחות ואוטומציה",
    desc: "הטמעת בוטים חכמים שיענו ללקוחות וינהלו תהליכים גם כשאתם ישנים."
  }
];

export default function Process() {
  return (
    <section id="curriculum" className="py-24 px-6 bg-cream" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-navy"
          >
            איך זה <span className="marker-highlight">עובד?</span> השיטה ב-5 שלבים:
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-10 rounded-3xl w-full md:w-[calc(33.333%-1.5rem)] relative overflow-hidden group"
            >
              {/* Massive Number Overlay */}
              <div className="absolute -right-4 -top-6 text-[180px] font-black text-green/5 group-hover:text-green/10 transition-colors pointer-events-none z-0">
                {step.num}
              </div>
              
              <div className="relative z-10 flex flex-col gap-6">
                <div className="p-4 bg-green/5 rounded-2xl w-fit">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy group-hover:text-green transition-colors">
                  {step.title}
                </h3>
                <p className="text-navy/60 leading-relaxed text-lg">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="bg-green text-white px-10 py-4 rounded-full font-bold text-xl inline-flex items-center gap-3 hover:bg-green-dark transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-green/20">
            אני רוצה להתחיל 
            <span className="text-2xl">←</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
