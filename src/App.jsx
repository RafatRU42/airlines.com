
import './App.css';

function App() {
  return (
    <div >
   <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<button className="btn">Button</button>
<button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Button</button>
<button className="btn btn-secondary">Button</button>
<button className="btn btn-accent">Button</button>
<button className="btn btn-ghost">Button</button>
<button className="btn btn-link">Button</button>
    </div>
  );
}

export default App;
