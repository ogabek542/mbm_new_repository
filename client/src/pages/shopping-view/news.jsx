import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

const NewPage = () => {
  return (
    <div className="flex flex-col h-auto bg-gray-50">
      <div className="mx-auto w-full max-w-3xl px-4 py-8">
        <Card className="shadow-lg">
          <CardHeader className="border-b pb-4">
            <CardTitle className="text-2xl md:text-3xl">
              MBM Machinery: Innovatsion Texnologiyalar Bilan Sanoatni Yuksaltirishda Yangi Bosqich
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">29.04.2025</p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-semibold mb-2">
                1. Global Mashinasozlik Sanoatida So‘nggi Tendensiyalar
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-medium">Raqamli transformatsiya:</span> IoT,
                  sun’iy intellekt va big data tahlillari yordamida mashinalarning
                  samaradorligi 20–30 % ga oshmoqda.
                </li>
                <li>
                  <span className="font-medium">Barqarorlikka intilish:</span> Yoqilg‘i
                  tejamkorligi va qayta tiklanuvchi materiallardan foydalanish
                  mashinasozlikda “yashil” yechimlarni ommalashtirmoqda.
                </li>
                <li>
                  <span className="font-medium">Avtomatlashtirish:</span>
                  Robotlashtirilgan montaj liniyalari va avtomatik diagnostika
                  tizimlari orqali nosozliklar aniqlash va xizmat ko‘rsatish
                  tezligi oshmoqda.
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-semibold mb-2">
                2. MBM Machinery’ning Yangi Mahsulotlar Portfeli
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-medium">MBM-X2000 Raqamli CNC Freze:</span> 5
                  o‘qli boshqaruv, real-vaqt rejimida nosozliklarni oldindan
                  ogohlantirish (predictive maintenance) funktsiyasi.
                </li>
                <li>
                  <span className="font-medium">EcoPress-500 Energiya Tejamkor Press:</span>{" "}
                  Avtomatik quvvat optimallashtirish tizimi va kam emissiyali
                  gidravlika.
                </li>
                <li>
                  <span className="font-medium">AutoWeld Pro-V3:</span> Robotlashtirilgan
                  payvandlash stansiyasi, yuqori aniqlik va doimiy sifatni
                  ta’minlaydi.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-semibold mb-2">
                3. Yaqinlashib kelayotgan Loyihalar va Hamkorliklar
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-medium">MachExpo 2025:</span> 12–15.06.2025,
                  Moskva. MBM Machinery stendi №B12 da yangi modellarning jonli
                  demonstratsiyasi.
                </li>
                <li>
                  <span className="font-medium">Ilmiy-Tadqiqot Hamkorligi:</span>{" "}
                  O‘zMU mexanika fakulteti bilan “aqlli zavod” konsepsiyasi ustida loyiha.
                </li>
                <li>
                  <span className="font-medium">Yevropa Yetkazib Beruvchilar:</span> GEA
                  Group (Germaniya) va COMEC (Italiya) bilan strategik shartnomalar.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-semibold mb-2">4. MBM Machinery Jamoasidan Fikrlar</h2>
              <blockquote className="border-l-4 pl-4 italic text-muted-foreground">
                “So‘nggi yillarda raqamli va ekologik standartlar bizni doimiy
                yangiliklarga undaydi. Bizning maqsad – O‘zbekistonda va
                Markaziy Osiyoda yuqori sifatli, zamonaviy mashinasozlik
                yechimlarini yetkazib berish,” – deydi Bosh direktor Islomjon Qodirov.
              </blockquote>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-semibold mb-2">5. Kelajakka Nazar</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Yil oxirigacha mahalliy bozorga 3 ta yangi modul qo‘shilishi,
                  eksport bo‘yicha esa 15 % o‘sish kutilmoqda.
                </li>
                <li>
                  Raqamli xizmatlar: mijozlarga onlayn monitoring, telematik
                  diagnostika va masofadan texnik yordam platformasi tez orada ishga tushiriladi.
                </li>
              </ul>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NewPage;
