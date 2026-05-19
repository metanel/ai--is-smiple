/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

const features = [
  {
    emoji: "🙈",
    title: "לא רוצים להצטלם?",
    description: "AI יוצר סרטונים מקצועיים מבלי שתצטרכו להראות את הפנים שלכם אפילו פעם אחת."
  },
  {
    emoji: "💸",
    title: "חייבים הון ראשוני? ממש לא.",
    description: "רוב הכלים המובילים זמינים בחינם או בעלות אפסית, כך שתוכלו להתחיל מיד."
  },
  {
    emoji: "👴👶",
    title: "מיועד רק לגיקים?",
    description: "הממשקים כל כך פשוטים ואינטואיטיביים, שגם ילדים וגם מבוגרים יכולים לשלוט בהם בקלות."
  },
  {
    emoji: "🤯",
    title: "מחסום כתיבה?",
    description: "הבינה המלאכותית תחשוב, תתכנן ותכתוב עבורכם תוכן איכותי ומניע לפעולה."
  }
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-cream" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 rounded-3xl text-center hover:border-mint/50 transition-all group"
            >
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.emoji}
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">{feature.title}</h3>
              <p className="text-navy/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="bg-navy text-white px-8 py-3 rounded-full font-bold inline-flex items-center gap-2 hover:bg-navy/90 transition-all">
            לחצו כאן לשריון מקום 
            <span className="text-xl">←</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
