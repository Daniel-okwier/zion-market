import React from "react";

export default function Footer() {
  return (
    <footer className="bg-zionGray border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          
          {/* Brand & Address Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold text-zionDark">
              Zion Market
            </h3>
            <div className="text-gray-600 text-sm leading-relaxed">
              <p className="hover:text-zionGreen transition-colors cursor-default">
                2819 Telegraph Ave, <br />
                Oakland, CA 94609
              </p>
              <p className="mt-2 font-medium text-zionDark">
                (510) 250-9586
              </p>
            </div>
          </div>

          {/* Navigation/Aisles Section (Optional but modern) */}
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Shop</span>
              <a href="#products" className="text-sm text-gray-600 hover:text-zionGreen transition-colors">Meat & Seafood</a>
              <a href="#products" className="text-sm text-gray-600 hover:text-zionGreen transition-colors">Produce</a>
              <a href="#products" className="text-sm text-gray-600 hover:text-zionGreen transition-colors">Pantry</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 Zion Market. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-xs font-medium">
            <a href="/terms" className="text-gray-500 hover:text-zionDark transition-colors">
              Terms
            </a>
            <a href="/privacy" className="text-gray-500 hover:text-zionDark transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}