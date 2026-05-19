/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "האם אני צריך ידע טכני מוקדם?",
    answer: "ממש לא. התוכנית בנויה מאפס ומתאימה גם למי שמעולם לא התנסה בבינה מלאכותית או בתכנות. אנחנו נלמד הכל צעד אחר צעד בשפה פשוטה וברורה."
  },
  {
    question: "תוך כמה זמן אראה תוצאות?",
    answer: "כבר אחרי השיעורים הראשונים תוכלו להתחיל ליישם כלים שיחסכו לכם שעות של עבודה. תוצאות עסקיות משמעותיות מגיעות לרוב תוך מספר שבועות של יישום עקבי."
  },
  {
    question: "האם הכלים עולים כסף?",
    answer: "אנחנו מתמקדים בעיקר בכלים חינמיים או כאלה שמציעים מסלול חינמי נדיב מאוד. במידה ויש כלי בתשלום ששווה את ההשקעה, נציג אותו, אך תמיד נציע גם אלטרנטיבה חינמית."
  },
  {
    question: "מתי מתקיימים המפגשים?",
    answer: "התכנית היא דיגיטלית לחלוטין וזמינה לצפייה מתי שנוח לכם. בנוסף, ישנם מפגשי שאלות ותשובות בזום פעם בשבועיים, בשעות הערב. כל המפגשים מוקלטים."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 bg-surface-container-low" dir="rtl">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-navy text-center mb-16">
          שאלות <span className="marker-highlight">נפוצות</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl shadow-sm border border-navy/5 overflow-hidden"
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className={`w-full p-8 flex justify-between items-center text-right transition-colors ${
                  openIdx === idx ? 'bg-cream-alt' : 'hover:bg-cream-alt/50'
                }`}
              >
                <span className="text-xl font-bold text-navy">{faq.question}</span>
                <div className="p-2 bg-white rounded-full shadow-sm text-navy">
                  {openIdx === idx ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-8 pt-0 text-lg text-navy/70 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
