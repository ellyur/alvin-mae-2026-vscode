import { motion } from 'framer-motion';

const EntourageSection = () => {
  const entourageData = {
    matronOfHonor: [
      "MONETTE ACOB",
      "MAYETTE DAMIAN",
    ],
    bestMan: "DON JIMENEZ",
    bridesmaids: [
      "LENINA ACOB",
      "JOYCEE ANN CHING",
      "JEANNIELOU STA. ANA",
      "HAPPY MAE ARIOLA",
      "JOHNNALY IB-IB",
      "JOANA MARIE MARTIN",
    ],
    groomsmen: [
      "RICARDO ACOB",
      "JOJEROME DAMIAN",
      "LEONARDO VILUAN JR.",
      "HAROLD DOMINGO",
      "MEYNARD ABLEN",
      "GERWIN MORFE",
      "LOUISE BERNARDO",
      "ALDRIN SERNIO",
    ],
    bearers: [
      { role: "Ring Bearer", name: "JOJEROME DAMIAN JR." },
      { role: "Coin Bearer", name: "ZION GABRIEL OSEA" },
    ],
    flowerGirls: [
      "JAMILAH ROME DAMIAN",
      "JHAI MICHAELA OSEA",
    ],
    principalSponsorsGentlemen: [
      "HUANG XINYU",
      "CHEN HANYANG",
      "JOSEPH BEJERANO",
      "CHRISTOPHER PILAR",
      "REYNALDO LAGUSAD",
      "AMELITO LANUGAN",
      "SERGIE BEÑAS",
      "ALVIN IMPAS",
      "SAMUEL DOMINGONO",
      "ROLAND SOBREVIÑAS",
      "CRISTITUTO SUMILHIG",
      "EXEQUIEL NUÑEZ",
    ],
    principalSponsorsLadies: [
      "BABY MEDINA",
      "DR. RECHELL BEJERANO",
      "CARMELITA BULLECER",
      "LOIDA RAMOS",
      "CELESTINA JUADA",
      "CELESTE BERNARDO",
      "ANNA LYN RAYMUNDO",
      "EMMA MATRIANO",
      "VIRGINIA ARENAS",
      "ROWENA RUBIO-ZONIO",
      "JACQUELINE NAMORO",
      "RACHEL LIBANTOCIA",
      "CARMELITA BALBON",
      "CATALINA NUÑEZ",
      "FELISA SUMILHIG",
    ],
  };

  return (
    <motion.section
      id="entourage"
      className="entourage-section bg-background relative overflow-hidden py-8 md:py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-primary/30 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-primary/30 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-[#004b4f] mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.5 }}
          data-testid="text-entourage-title"
        >
          Wedding Entourage
        </motion.h2>

        {/* Matron of Honor & Best Man */}
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.7 }}
        >
          <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-right">
              <h3 className="text-sm md:text-lg font-display font-semibold mb-3 text-[#004b4f]">
                Matron of Honor
              </h3>
              {entourageData.matronOfHonor.map((name, idx) => (
                <p key={idx} className="text-[11px] md:text-base text-[#333333]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  {name}
                </p>
              ))}
            </div>
            <div className="text-left">
              <h3 className="text-sm md:text-lg font-display font-semibold mb-3 text-[#004b4f]">
                Best Man
              </h3>
              <p className="text-[11px] md:text-base text-[#333333]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                {entourageData.bestMan}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bridesmaids & Groomsmen */}
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.9 }}
        >
          <div className="grid grid-cols-2 gap-6 md:gap-12 max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="text-base md:text-2xl font-display font-bold mb-3 md:mb-5 text-[#004b4f]">
                Bridesmaids
              </h3>
              {entourageData.bridesmaids.map((name, index) => (
                <p key={index} className="text-[10px] md:text-base text-[#333333] mb-1 text-right" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  {name}
                </p>
              ))}
            </div>
            <div className="text-center">
              <h3 className="text-base md:text-2xl font-display font-bold mb-3 md:mb-5 text-[#004b4f]">
                Groomsmen
              </h3>
              {entourageData.groomsmen.map((name, index) => (
                <p key={index} className="text-[10px] md:text-base text-[#333333] mb-1 text-left" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  {name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bearers */}
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.1 }}
        >
          <div className="flex justify-center gap-12 md:gap-20 flex-wrap">
            {entourageData.bearers.map((item, index) => (
              <div key={index} className="text-center">
                <h4 className="text-sm md:text-lg font-display font-semibold mb-2 text-[#004b4f]">
                  {item.role}
                </h4>
                <p className="text-[10px] md:text-base text-[#333333]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Flower Girls */}
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.3 }}
        >
          <h3 className="text-base md:text-2xl font-display font-bold mb-3 md:mb-5 text-[#004b4f]">
            Flower Girls
          </h3>
          <div className="flex justify-center gap-8 md:gap-12 flex-wrap">
            {entourageData.flowerGirls.map((name, index) => (
              <p key={index} className="text-[10px] md:text-base text-[#333333]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                {name}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Principal Sponsors */}
        <motion.div
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.5 }}
        >
          <h3 className="text-xl md:text-3xl font-display font-bold mb-6 md:mb-8 text-[#004b4f]">
            Principal Sponsors
          </h3>
          <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
            <div>
              {entourageData.principalSponsorsGentlemen.map((name, index) => (
                <p key={index} className="text-[10px] md:text-sm text-[#333333] mb-1 text-right" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  {name}
                </p>
              ))}
            </div>
            <div>
              {entourageData.principalSponsorsLadies.map((name, index) => (
                <p key={index} className="text-[10px] md:text-sm text-[#333333] mb-1 text-left" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  {name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;
