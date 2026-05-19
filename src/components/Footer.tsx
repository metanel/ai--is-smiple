/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-16 px-6 border-t border-white/5" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold mb-2">בינה מלאכותית זה פשוט</h3>
            <p className="text-white/50">מנגישים את העתיד לכל עסק בישראל.</p>
          </div>

          <div className="flex gap-8 text-sm font-medium text-white/70">
            <a href="#" className="hover:text-green transition-colors">תקנון</a>
            <a href="#" className="hover:text-green transition-colors">פרטיות</a>
            <a href="#" className="hover:text-green transition-colors">צור קשר</a>
            <a href="#" className="hover:text-green transition-colors">בלוג</a>
          </div>

          <div className="text-sm text-white/30">
            © 2026 מתנאל. כל הזכויות שמורות.
          </div>
        </div>
      </div>
    </footer>
  );
}
