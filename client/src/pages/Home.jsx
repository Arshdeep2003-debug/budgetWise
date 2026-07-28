import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page home-page">
      <div className="hero">
        <h1>BudgetWise</h1>
        <p className="hero-subtitle">Smart Expense Tracker with Budget Analytics</p>
        <p>
          Track your income and expenses, set monthly budgets, and get rule-based
          smart insights into your spending habits — all in one place.
        </p>
        <div className="hero-actions">
          <Link to="/register" className="btn-primary">Get Started</Link>
          <Link to="/login" className="btn-secondary">Login</Link>
        </div>
      </div>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Track Everything</h3>
          <p>Log income and expenses across custom categories with full search and filtering.</p>
        </div>
        <div className="feature-card">
          <h3>Set Budgets</h3>
          <p>Define monthly budgets per category and know instantly when you're close to the limit.</p>
        </div>
        <div className="feature-card">
          <h3>Visual Analytics</h3>
          <p>Pie, bar, and line charts break down exactly where your money goes each month.</p>
        </div>
        <div className="feature-card">
          <h3>Smart Insights</h3>
          <p>Rule-based insights flag overspending, savings, and category trends automatically.</p>
        </div>
      </div>
    </div>
  );
}
