import "../../pages/Styles/TopSectionStyle.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const PROMOS = [
  { titre: "Collection Printemps 2024", description: "Découvrez nos derniers produits technologiques", background: "linear-gradient(90deg, #2d5a27 0%, #4a8c42 100%)" },
  { titre: "Soldes - Jusqu'à -50%", description: "Profitez des offres exceptionnelles sur une sélection d'articles", background: "linear-gradient(90deg, #8b2942 0%, #c73e63 100%)" },
  { titre: "Livraison gratuite", description: "Offerte dès 50€ d'achat sur tout le site", background: "linear-gradient(90deg, #1a4d6d 0%, #2d7a9f 100%)" },
  { titre: "Nouveautés exclusives", description: "Soyez les premiers à découvrir nos nouveautés", background: "linear-gradient(90deg, #5c3d2e 0%, #8b5a3c 100%)" },
  { titre: "Offre de bienvenue", description: "Inscrivez-vous et obtenez 10% de réduction sur votre première commande", background: "linear-gradient(90deg, #3a2c5a 0%, #6b4c8b 100%)" },
  { titre: "Fin de saison - Dernières pièces", description: "Ne manquez pas les dernières pièces à prix réduits", background: "linear-gradient(90deg, #7a2e2e 0%, #c94e4e 100%)" },
];

function TopSection() {
  return (
    <div className="top-section-wrapper">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="top-section-swiper"
      >
        {PROMOS.map((promo, index) => (
          <SwiperSlide key={index}>
            <div className="top-section" style={{ background: promo.background }}>
              <h1 className="top-section-promo">{promo.titre}</h1>
              <div className="top-section-desc">{promo.description}</div>
              <button>Découvrir maintenant</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default TopSection;