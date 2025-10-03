import LiquidEther from './LiquidEther';

function App() {
  return (
    <div className="liquid-ether-container">
      <div className="liquid-ether-background">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <div className="overlay-text-header">
        <h1>VinRaR's Portfolio</h1>
      </div>
      <div className="overlay-text">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a developer who codes like I vacation—with maximum efficiency and minimal stress, because life's too short for buggy websites and missed flight connections. When I'm not crafting digital experiences that work smoother than airport Wi-Fi (which isn't saying much), I'm probably planning my next escape or pretending my desk is a beach chair in Bali</p>
      </div>
      <div className="overlay-text-footer">
        <p>Thanks!</p>
      </div>
    </div>
  );
}

export default App;
