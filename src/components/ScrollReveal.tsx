import { useEffect, useRef, type ReactNode, type CSSProperties } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  style?: CSSProperties;
}

export default function ScrollReveal({ children, className = '', delay = 0, style }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay > 0 ? ` delay-${delay}` : '';

  return (
    <div ref={ref} className={`reveal${delayClass}${className ? ' ' + className : ''}`} style={style}>
      {children}
    </div>
  );
}
