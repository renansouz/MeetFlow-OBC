import logo from '@/public/faviconMeetFlow.svg';

const Preloader: React.FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-950">
      <img src={logo} alt="Logo" className="h-20 w-20 animate-bounce" />
    </div>
  );
};

export default Preloader;
