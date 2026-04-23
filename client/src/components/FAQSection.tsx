import { useState } from 'react';
import { ChevronDown, ChevronUp, Camera, Clock, Users, Calendar, MessageCircle, Baby } from 'lucide-react';
import { motion } from 'framer-motion';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What date should I RSVP by?",
      icon: Calendar,
      answer: "We kindly ask that all guests RSVP by May 8, 2026, so we can plan everything perfectly!"
    },
    {
      question: "I RSVP-ed but have a change of plans. What should I do?",
      icon: MessageCircle,
      answer: "Change of heart or schedule? No worries! If you've already declined but are now able to join, just send us a message. We'll check if there's still space for you to celebrate with us!"
    },
    {
      question: "Can I bring a plus one?",
      icon: Users,
      answer: "As much as we would love to celebrate with all our friends and family, due to limited space and budget, we are unable to accommodate plus ones. Please check your invitation or the Smart RSVP for allowed plus guests."
    },
    {
      question: "Can I bring my kids during the event?",
      icon: Baby,
      answer: "As much as we love your little ones, we've decided to keep our wedding an adults-only event so everyone can relax and enjoy the evening. We hope you understand and can still join us on our special day! 🤍"
    },
    {
      question: "What time should I arrive?",
      icon: Clock,
      answer: "Help us get the party started as scheduled! We recommend that you arrive an hour or 30 mins before the start of the ceremony or reception to make sure everyone is seated on time. We encourage you to consider the travel time and traffic going to the venue."
    },
    {
      question: "What is the dress code?",
      icon: Camera,
      answer: "See the Attire Rules / Guide section for details."
    },
    {
      question: "Can we sit anywhere at reception?",
      icon: Users,
      answer: "NO. It took us a lot of effort and discussion to finish the seating arrangement which is planned for everyone's convenience and network preference. So, no need to worry. You'll be surely seated along with your group of friends and family"
    },
    {
      question: "Will there be parking available?",
      icon: Clock,
      answer: "Yes! Parking is available at both the ceremony and reception venues."
    },
    {
      question: "Can I take photos during the ceremony?",
      icon: Camera,
      answer: "We invite you to be fully present with us during this special moment. Please keep your phones and cameras away — our professional photographer will capture everything beautifully. Your smiles and presence mean the most to us!"
    },
    {
      question: "Can I take photos during the reception?",
      icon: Camera,
      answer: "Yes, please do! Snap away during cocktail hour and the reception, and share your favorite memories using our official hashtag. We'd love to see the celebration through your eyes!"
    },
    {
      question: "When is the appropriate time to leave?",
      icon: Clock,
      answer: "We devoted a lot of time and effort to plan our wedding that everyone will hopefully enjoy. We would like to personally thank you for joining us to celebrate. However, we kindly request that you consider staying until after our Thanksgiving Speech. Please do not eat and run!"
    }
  ];

  return (
    <motion.section 
      className="section-pastel-blue bg-white py-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 11.5 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 11.8 }}
        >
          <h2 className="text-5xl font-display font-light italic text-[#004b4f] mb-8" data-testid="text-faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-lg font-body max-w-2xl mx-auto text-[#333333]">
            We've compiled answers to the most common questions about our wedding day. 
            If you have additional questions, please don't hesitate to contact us.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-card/30 border border-border rounded-xl shadow-soft overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 12.1 + (index * 0.1) }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gold/5 transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <faq.icon className="w-5 h-5 text-[#004b4f] flex-shrink-0" />
                  <span className="text-xl font-body font-semibold text-[#004b4f]">
                    {faq.question}
                  </span>
                </div>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-[#004b4f]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#004b4f]" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <div className="w-full h-px bg-border mb-4"></div>
                  <p className="text-[#333333] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection;
