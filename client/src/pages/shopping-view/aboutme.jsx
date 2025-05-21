import React from "react";
import headOfficePhoto from "../../assets/mbm_business_machinery_dark_blue.png";

const Aboutme = () => {
  return (
    <div className="flex flex-col  h-auto">
      {/* top section */}
      <div
        className="
              max-w-7xl mx-auto                
              grid gap-4                       
              grid-cols-1 md:grid-cols-2      
              px-4 md:px-8                     
              py-6                             
              "
      >
        <div className="flex flex-col items-center justify-center">
          {/* <==== IMAGE SECTION =====> */}
          <img
            src={headOfficePhoto}
            alt="Head Office of MBM Business Machinery"
            className="w-full h-auto object-cover rounded-md shadow-sm"
            loading="lazy"
          />
        </div>
        {/* <==== TEXT SECTION ====> */}
        <div className="flex flex-col justify-center">
          <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-800">
            “<strong>OOO MBM Business Machinery</strong>” kompaniyasi —
            biznesingizning ishonchli hamrohi. Kompaniyamiz 2025-yil Oʻzbekiston
            Respublikasi hududida tashkil etilgan bo‘lib, shu davr mobaynida
            tadbirkorlarga arzon va sifatli ishlab chiqarish uskunalari hamda
            maxsus texnikalarni yetkazib berib kelmoqda. <br />
            <br />
            Hozirgi kunda kompaniyaning rasmiy ofislari Toshkent shahri va
            Xitoyning Jejiang provinsiyasida joylashgan. Shuningdek, Xitoydagi
            ombor hamda Toshkentdagi yirik ko‘rgazma zali mijozlarimiz
            ixtiyorida. <br />
            <br />
            Biz professional, xalqaro malakali va mas’uliyatli jamoadan tashkil
            topganmiz — “MBM Business Machinery” brendi ostida xizmat
            ko‘rsatishda davom etamiz.
          </p>
        </div>
      </div>
     {/* bottom section */}
    <div
        className="
              max-w-7xl mx-auto                
              grid gap-4                       
              grid-cols-1 md:grid-cols-2      
              px-4 md:px-8                     
              py-6                             
              "
      >
      {/* <!-- TEXT SECTION --> */}
<div className="flex flex-col justify-center">
  {/* 1-paragraf */}
  <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-800">
    <strong>“MBM Business Machinery”</strong> – sanoatingizning ishonchli
    yetkazib beruvchisi va texnologik hamkori. Kompaniyamiz Oʻzbekiston va
    Xitoy bozorlarida yuqori sifatli sanoat uskunalari, qurilmalari hamda
    xom-ashyolarni yetkazib berish boʻyicha yetakchi provayderlardan biridir.
    Mijozlarimizga nafaqat zamonaviy texnika xaridida, balki uning toʻliq
    oʻrnatilishi, sozlanishi va xodimlar malakasini oshirishda ham yordam
    beramiz. Barcha jihozlarga&nbsp;
    <strong>1 yillik rasmiy kafolat</strong> – mahsulotlarimiz ishonchliligi
    va mas’uliyatimiz kafolati.
  </p>

  {/* Afzalliklar ro‘yxati */}
  <ul className="list-disc pl-5 my-4 space-y-1 text-sm md:text-base leading-relaxed font-semibold text-slate-800">
    <li>
      <span className="font-bold">Xalqaro tajriba –</span> Xitoy&nbsp;
      (Jejiang provinsiyasi) va Oʻzbekiston&nbsp;(Toshkent) ofislari hamda
      strategik omborlarimiz tez va ishonchli logistika ta’minlaydi.
    </li>
    <li>
      <span className="font-bold">Turn-key yechimlar –</span> uskunani
      tanlashdan tortib, oʻrnatish, sozlash va xodimlarni oʻqitishgacha toʻliq
      hamrohlik.
    </li>
    <li>
      <span className="font-bold">Kafolatli xizmat –</span> barcha jihozlar
      uchun 1 yilgacha rasmiy kafolat va doimiy texnik yordam.
    </li>
    <li>
      <span className="font-bold">Professional jamoa –</span> xalqaro
      standartlarga mos ishlash tajribasiga ega malakali mutaxassislar.
    </li>
  </ul>

  {/* Yakuniy chaqiriq */}
  <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-800">
    Biz sizning biznesingizni yangi texnologiyalar bilan ta’minlashga tayyormiz —
    <strong> “MBM Business Machinery”</strong> brendi ostida ishonchli hamkor
    boʻling!
  </p>

  {/* Aloqa */}
  <p className="mt-4 text-sm md:text-base leading-relaxed font-semibold text-slate-800">
    🔗 Bogʻlanish:&nbsp;
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline hover:text-blue-800"
    >
      www.mbmbusiness.uz 
    </a>
    &nbsp;|&nbsp; 📞 +998 (93) 396-30-97
  </p>
</div>
<div className="hidden md:flex flex-col items-center justify-center">
  {/* <==== IMAGE SECTION =====> */}
  <img
    src={headOfficePhoto}
    alt="Head Office of MBM Business Machinery"
    className="w-full h-auto object-cover rounded-md shadow-sm"
    loading="lazy"
  />
</div>
      </div>
    </div>
  );
};

export default Aboutme;
