/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Instagram, 
  Facebook, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight, 
  Star,
  Coffee,
  IceCream,
  Milk,
  ExternalLink,
  Map as MapIcon,
  MessageCircle
} from "lucide-react";

const MENU_ITEMS = [
  { name: "Lody Tajskie", description: "Naturalne składniki, tworzone na Twoich oczach.", icon: <Star className="w-6 h-6" /> },
  { name: "Świderki", description: "Klasyczne, kremowe lody kręcone (Amerykańskie).", icon: <IceCream className="w-6 h-6" /> },
  { name: "Lody Flurry", description: "Kremowe lody z mnóstwem pysznych dodatków.", icon: <Star className="w-6 h-6" /> },
  { name: "Shake", description: "Gęste i orzeźwiające koktajle lodowe.", icon: <Milk className="w-6 h-6" /> },
  { name: "Włoskie Kawy", description: "100% Arabica - najwyższa jakość i aromat.", icon: <Coffee className="w-6 h-6" /> },
];

const GALLERY = [
  { url: "https://scontent-waw2-2.xx.fbcdn.net/v/t51.82787-15/527171856_18130934140451835_6278678454734526146_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=lro1j5TIMW0Q7kNvwHh4fL_&_nc_oc=Adr17ISxbnifJJE3ZWLBW_OL4BPsyDNsSU_icpwhfWkA5S6xWbQDmmWvKhxv3N4nGt4&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=H3rNC59fl2-tjDsRNFHkRQ&_nc_ss=7b2a8&oh=00_Af3MOQrYoZ6SRxY5AW6Y46p88Klf11zsbjkJBRmb3kMxaQ&oe=69F7C838", description: "Pucharek z owocami" },
  { url: "https://scontent-waw2-1.xx.fbcdn.net/v/t51.82787-15/527106011_18130652299451835_733707689853448097_n.jpg?stp=dst-jpegr_tt6&_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=aNrJ1m5YtHkQ7kNvwEcg5sG&_nc_oc=AdryLT_sckyn__F78W_Fl0SbqsCB4j-7PBqKuM9LsVVeqk-5-VpUteJCGn6sC813gYQ&_nc_zt=23&se=-1&_nc_ht=scontent-waw2-1.xx&_nc_gid=_wU3qRefiWOZaMScQsWD6Q&_nc_ss=7b2a8&oh=00_Af3G8ePQrgU7RTsKYdxy0_oF473_bT-XLj2l96fombh9zA&oe=69F7CB19", description: "Pyszna Matcha" },
  { url: "https://scontent-waw2-1.xx.fbcdn.net/v/t51.82787-15/522573996_18129839899451835_8141117075417104848_n.jpg?stp=dst-jpegr_tt6&_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=xq_ZDswp2z4Q7kNvwEJjTgz&_nc_oc=AdqXlhtesCg8C71bug4TcfkoZ-2d27k9acE_3Z-PLlpSVMQqvO0hkqn7X3qOX-GqmhY&_nc_zt=23&se=-1&_nc_ht=scontent-waw2-1.xx&_nc_gid=ZhX1fNctieJXV51ooqoC4Q&_nc_ss=7b2a8&oh=00_Af2-DH5dDCa2h9F42rCRI8irdhxPf4Q4qxa_0SFM9KZ1uw&oe=69F7CFBD", description: "Matcha Mango" },
  { url: "https://scontent-waw2-1.xx.fbcdn.net/v/t51.75761-15/509621503_18127692679451835_4698089871479359306_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=e3p8cuXSN-QQ7kNvwEo_Dsa&_nc_oc=AdpklU298kNt3AzLEpbuRN94N76lbMMWm4Uj7VEfEjzZZhg018eVdw4rq1PFlRPjSNc&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=lgWlT3l_vm-wIr929UaxQw&_nc_ss=7b2a8&oh=00_Af3r2UeybhZuy1Fw2NSQQdszh5qOw7JwryA0i6TM_qQguw&oe=69F7AFA6", description: "Świeży sok" },
  { url: "https://scontent-waw2-2.xx.fbcdn.net/v/t51.75761-15/503555113_18127232119451835_3562902207556464022_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_ohc=RtrQS-48nUQQ7kNvwFT6Y6c&_nc_oc=AdrwZMp0NHcGPmtmMMJsOC9ATEfpiLcVkVgPHvkDXrT7fE27KAdNwyDm_59JZinB1oA&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=wkhwYQajygN2ypYSaKjstQ&_nc_ss=7b2a8&oh=00_Af0hz2hBVd36ENyxbN24bljlLb7T8k8XLs3VX9630ub9Ag&oe=69F7C83F", description: "Lody Tajskie Pistacja" },
  { url: "https://scontent-waw2-1.xx.fbcdn.net/v/t51.82787-15/524169637_18130202911451835_2372547233053760577_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=xExhrlazAokQ7kNvwE0CGW-&_nc_oc=Adpl_HKOX6Ad6bfpSQ8m26XPicJTZZBGr2SzsNUOHt9dweGsA6NuXeMu7WFSD9ZiwYE&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=vwIOjrvP5t_4C_-Ymf2vDg&_nc_ss=7b2a8&oh=00_Af2MqoUqlX5oujzSyMyyVYr2ECGgYhB20y6YA7ZTvKQGeg&oe=69F7B8A1", description: "Nasze kolorowe desery" }
];

const FeatureCard = ({ title, description, icon, delay = 0 }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="bg-white/50 backdrop-blur-sm p-8 rounded-4xl border border-turquoise-100 hover:border-turquoise-300 hover:bg-white transition-all group"
  >
    <div className="w-12 h-12 rounded-2xl bg-turquoise-100 text-turquoise-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="font-serif text-2xl mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-turquoise-50 text-slate-900 font-sans selection:bg-turquoise-200">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
        <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-full px-8 py-4 shadow-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-turquoise-500 overflow-hidden shadow-lg shadow-turquoise-200">
              <img src="https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/302094386_497028972428371_3260659726051270388_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=F7Q-_LXQnQcQ7kNvwGgUOJn&_nc_oc=Adr1018wH94xMeOpGNi_Od200bO_KRW5MHVJwXruv6sQlBcl8V28SVlW-tYjLkcNN7w&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=nw5C-HecaZ8ZYXgF-PwIig&_nc_ss=7b2a8&oh=00_Af2ViSVQZvR8SvoJuqvqqnhq4EfHypnWxgDaL5IM9gBsXg&oe=69F7C0B0" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-brand text-3xl font-bold text-turquoise-700 tracking-tight">Lodo Sfera</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-500">
            <a href="#menu" className="hover:text-turquoise-600 transition-colors">Specjały</a>
            <a href="#gallery" className="hover:text-turquoise-600 transition-colors">Galeria</a>
            <a href="#reviews" className="hover:text-turquoise-600 transition-colors">Opinie</a>
            <a href="#contact" className="hover:text-turquoise-600 transition-colors">Kontakt</a>
          </div>
          <a href="https://www.facebook.com/lodosfera" target="_blank" className="bg-turquoise-600 text-white p-2 rounded-full hover:bg-turquoise-700 transition-all shadow-lg shadow-turquoise-200">
            <Facebook size={18} />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-48 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 text-center lg:text-left space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-2 bg-turquoise-100 rounded-full text-turquoise-700 text-xs font-bold uppercase tracking-widest">
              🍦 Najlepsza lodziarnia w Starachowicach
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-7xl md:text-9xl font-black text-slate-900 leading-[0.85] tracking-tighter">
              Orzeźwienie <br />
              <span className="text-turquoise-500">w każdym</span> <br />
              kęsie.
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Od puszystych lodów tajskich po klasyczne włoskie espresso. Lodo Sfera to Twoja codzienna porcja słodkiej przyjemności.
            </motion.p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="#menu" className="px-10 py-5 bg-turquoise-600 text-white rounded-3xl font-black text-lg shadow-2xl shadow-turquoise-300 hover:bg-turquoise-700 hover:-translate-y-1 transition-all">Nasze Menu</a>
              <a href="#contact" className="px-10 py-5 bg-white border-2 border-turquoise-100 rounded-3xl font-black text-lg hover:border-turquoise-400 transition-all">Gdzie jesteśmy?</a>
            </div>
          </div>
          <div className="flex-1 relative">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="relative z-10 rounded-5xl overflow-hidden shadow-2xl border-2 border-white transform rotate-2">
              <img src="https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/470023514_18108486208451835_2338514812580410372_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=tg_A11LNr6IQ7kNvwHWKhAP&_nc_oc=AdqlAdUC115F0ZmWhb-niqJrVPws56tfdoMAsHRlp0baFUFoIwGlTep2qjAGudzo2Ts&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=z8IGk__DCDhqizWEi7u2KQ&_nc_ss=7b2a8&oh=00_Af0ZKFlN7Z8FNp_dSi-pEzsbUS_iEfZJel4H00xXA09Hrw&oe=69F7C2F2" alt="Hero" className="w-full h-[600px] object-cover" />
            </motion.div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-turquoise-300 rounded-full blur-[100px] opacity-30 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-sky-300 rounded-full blur-[100px] opacity-30 animate-pulse delay-700" />
          </div>
        </div>
      </section>

      {/* Bento Menu */}
      <section id="menu" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-turquoise-50 p-12 rounded-5xl flex flex-col justify-between items-start space-y-12">
            <div>
              <h2 className="font-serif text-5xl font-black text-slate-900 mb-4">Nasze Menu</h2>
              <p className="text-slate-500 font-medium">Starannie wyselekcjonowane smaki i najwyższa jakość.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 w-full">
              {MENU_ITEMS.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-turquoise-500 shadow-sm">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-800">{item.name}</h4>
                    <p className="text-sm text-slate-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900 p-12 rounded-5xl text-white flex flex-col justify-between">
            <Coffee className="w-12 h-12 text-turquoise-400" />
            <div>
              <h3 className="text-3xl font-serif font-black mb-4">Włoska Kawa</h3>
              <p className="text-slate-400 mb-8 font-medium">Prawdziwa 100% Arabica serwowana w tradycyjny sposób.</p>
              <div className="px-6 py-4 bg-white/10 rounded-2xl border border-white/20 text-center font-bold">Zawsze świeżo mielona</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section id="gallery" className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="font-serif text-5xl font-black mb-4">Uchwycone Chwile</h2>
            <p className="text-slate-500 font-medium tracking-wide italic">Słodkości które pokochali mieszkańcy Starachowic</p>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {GALLERY.map((img, i) => (
              <motion.div key={i} whileHover={{ y: -8 }} className="relative group rounded-4xl overflow-hidden border-2 border-white shadow-xl">
                <img src={img.url} alt={img.description} className="w-full h-auto" />
                <div className="absolute inset-0 bg-turquoise-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-8 text-center backdrop-blur-sm">
                  <p className="text-white font-bold text-lg">{img.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Map */}
      <section id="contact" className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-5xl overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[600px]">
            <div className="flex-1 p-16 space-y-12">
              <div>
                <h2 className="font-serif text-5xl font-black mb-4">Odwiedź Nas</h2>
                <p className="text-slate-500 font-medium">Zapraszamy codziennie, aby osłodzić Twój dzień!</p>
              </div>
              <div className="space-y-6">
                {[
                  { icon: <MapPin />, label: "Adres", value: "Kościelna 3, Starachowice 27-200" },
                  { icon: <Phone />, label: "Zadzwoń", value: "698 560 835" },
                  { icon: <Mail />, label: "Napisz do nas", value: "lodziarnialodosfera@gmail.com" },
                  { icon: <Clock />, label: "Godziny", value: "Codziennie 11:00 - 18:00" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-center group">
                    <div className="w-12 h-12 bg-turquoise-50 rounded-2xl text-turquoise-600 flex items-center justify-center group-hover:bg-turquoise-600 group-hover:text-white transition-all">{item.icon}</div>
                    <div>
                      <p className="text-xs font-black uppercase text-slate-400 tracking-widest mb-1">{item.label}</p>
                      <p className="text-lg font-bold text-slate-800">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 pt-4">
                <a href="https://www.facebook.com/lodosfera" className="flex items-center gap-3 px-8 py-4 bg-turquoise-600 text-white rounded-3xl font-black hover:bg-turquoise-700 transition-all shadow-xl shadow-turquoise-200">
                  <Facebook size={20} /> Facebook
                </a>
              </div>
            </div>
            <div className="flex-1 relative min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.6446111087484!2d21.080505758302834!3d51.04118427194326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47181425b3a12e03%3A0x49bc64ffd9466c24!2sLodosfera!5e0!3m2!1spl!2spl!4v1777461361852!5m2!1spl!2spl" 
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all" 
                allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <MessageCircle className="w-16 h-16 text-turquoise-500 mx-auto" />
          <h2 className="font-serif text-5xl font-black">Co mówią nasi klienci?</h2>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="p-12 bg-white rounded-5xl border-2 border-turquoise-100 shadow-xl relative italic text-2xl text-slate-700 font-serif leading-relaxed">
            "Najlepsze lody tajskie w okolicy! Świetna atmosfera i zawsze uśmiechnięty zespół."
            <div className="mt-8 not-italic flex flex-col items-center gap-2">
              <div className="flex gap-1 text-yellow-400"><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /></div>
              <span className="text-sm font-black uppercase text-slate-400 tracking-widest">Opinia z Facebook</span>
            </div>
          </motion.div>
          <a href="https://www.facebook.com/lodosfera/reviews" className="inline-flex items-center gap-2 text-turquoise-600 font-black text-lg hover:underline underline-offset-8 transition-all">
            Zobacz wszystkie opinie <ExternalLink size={20} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-turquoise-500 p-1">
              <img src="https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/302094386_497028972428371_3260659726051270388_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=F7Q-_LXQnQcQ7kNvwGgUOJn&_nc_oc=Adr1018wH94xMeOpGNi_Od200bO_KRW5MHVJwXruv6sQlBcl8V28SVlW-tYjLkcNN7w&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=nw5C-HecaZ8ZYXgF-PwIig&_nc_ss=7b2a8&oh=00_Af2ViSVQZvR8SvoJuqvqqnhq4EfHypnWxgDaL5IM9gBsXg&oe=69F7C0B0" alt="Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <span className="font-brand text-4xl font-bold tracking-tight text-turquoise-400">Lodo Sfera</span>
          </div>
          <div className="flex flex-wrap justify-center gap-12 text-slate-400 font-bold uppercase text-xs tracking-widest">
            <a href="#menu" className="hover:text-white transition-colors">Specjały</a>
            <a href="#gallery" className="hover:text-white transition-colors">Galeria</a>
            <a href="#reviews" className="hover:text-white transition-colors">Opinie</a>
            <a href="#contact" className="hover:text-white transition-colors">Dojazd</a>
            <a href="https://www.facebook.com/lodosfera" className="hover:text-white transition-colors">Facebook</a>
          </div>
          <p className="text-slate-500 text-sm font-medium pt-12 border-t border-white/5">
            &copy; {new Date().getFullYear()} Lodo Sfera Starachowice. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </footer>
    </div>
  );
}
