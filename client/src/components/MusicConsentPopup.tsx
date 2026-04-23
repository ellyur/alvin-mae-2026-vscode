import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, KeyRound, ShieldCheck } from 'lucide-react';

interface MusicConsentPopupProps {
  onConsent: (consent: boolean) => void;
  isVisible: boolean;
}

const CORRECT_PASSWORD = 'AlvinMae';

const MusicConsentPopup = ({ onConsent, isVisible }: MusicConsentPopupProps) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);

  const handleUnlock = () => {
    if (code === CORRECT_PASSWORD) {
      setError(false);
      onConsent(true);
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ backgroundColor: '#d4f0ed' }}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 16 }}
            animate={shaking ? { x: [0, -10, 10, -8, 8, -4, 4, 0] } : { scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 16 }}
            transition={shaking ? { duration: 0.45 } : { type: 'spring', duration: 0.5 }}
            className="w-full max-w-sm flex flex-col items-center text-center px-8 py-10"
            style={{ backgroundColor: '#d4f0ed' }}
          >
            <div
              className="w-16 h-16 flex items-center justify-center rounded-2xl mb-7"
              style={{ backgroundColor: '#7dcdc6' }}
            >
              <Lock className="w-7 h-7" style={{ color: '#004B4F' }} />
            </div>

            <h1
              className="text-4xl mb-1 leading-tight"
              style={{ fontFamily: "'Dancing Script', 'Playfair Display', Georgia, serif", color: '#004B4F', fontWeight: 700 }}
            >
              Security
            </h1>
            <h1
              className="text-4xl mb-5"
              style={{ fontFamily: "'Dancing Script', 'Playfair Display', Georgia, serif", color: '#004B4F', fontWeight: 700 }}
            >
              Verification
            </h1>

            <div className="w-8 h-px mb-5" style={{ backgroundColor: '#408077' }} />

            <p className="text-sm leading-relaxed mb-7 px-2 text-[#333333]" style={{ color: '#333333' }}>
              Access to this invitation is restricted.<br />
              Please enter the authorized access code.
            </p>

            <form
              className="w-full"
              onSubmit={(e) => { e.preventDefault(); handleUnlock(); }}
            >
              <div className="w-full mb-4">
                <div
                  className="flex items-center gap-2 rounded-md px-4 py-3 border"
                  style={{
                    backgroundColor: '#c0e8e5',
                    borderColor: error ? '#c0392b' : '#5a9f92',
                  }}
                >
                  <KeyRound className="w-4 h-4 flex-shrink-0" style={{ color: '#2d6870' }} />
                  <input
                    type="password"
                    value={code}
                    onChange={(e) => { setCode(e.target.value); setError(false); }}
                    placeholder="Enter Access Code"
                    className="flex-1 bg-transparent outline-none text-sm"
                    style={{ color: '#004B4F', caretColor: '#004B4F' }}
                    data-testid="input-access-code"
                  />
                </div>
                {error && (
                  <p className="text-xs mt-1 text-left" style={{ color: '#c0392b' }}>
                    Incorrect access code. Please try again.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-md py-3 text-sm font-semibold tracking-wide transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#004B4F', color: '#c0e8e5', letterSpacing: '0.04em' }}
                data-testid="button-unlock-invitation"
              >
                <ShieldCheck className="w-4 h-4" />
                Unlock Invitation
              </button>
            </form>

            <p
              className="mt-8 text-xs tracking-widest uppercase"
              style={{ color: '#408077', letterSpacing: '0.18em' }}
            >
              Secured Invitation Portal
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MusicConsentPopup;
