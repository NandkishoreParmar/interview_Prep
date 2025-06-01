import React, { useState, useEffect } from "react";
import axios from "axios";

// QuoteCard component
function QuoteCard({ quote, author, fontSize, themeColor, liked, onLike }) {
  return (
    <div
      style={{
        padding: "1.5rem",
        margin: "2rem auto",
        maxWidth: "600px",
        borderRadius: "10px",
        backgroundColor: themeColor.background,
        color: themeColor.text,
        fontSize: fontSize,
        boxShadow: `0 0 10px ${themeColor.text}`,
        position: "relative",
      }}
    >
      <p style={{ fontStyle: "italic" }}>"{quote}"</p>
      <p style={{ fontWeight: "bold", marginTop: "1rem" }}>- {author}</p>
      <button
        onClick={onLike}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: liked ? "red" : themeColor.text,
          fontSize: "1.5rem",
        }}
        aria-label="Like quote"
      >
        {liked ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

// ThemeToggle component
function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      style={{
        margin: "1rem auto",
        display: "block",
        padding: "0.5rem 1rem",
        cursor: "pointer",
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

// QuoteButton component
function QuoteButton({ onClick, children, themeColor }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "0.75rem 1.5rem",
        fontSize: "1rem",
        cursor: "pointer",
        backgroundColor: themeColor.text,
        color: themeColor.background,
        border: "none",
        borderRadius: "5px",
        margin: "0 auto",
        display: "block",
      }}
    >
      {children}
    </button>
  );
}

// Main App component
export default function App() {
  const [quoteData, setQuoteData] = useState({ q: "", a: "" });
  const [liked, setLiked] = useState(false);
  const [fontSize, setFontSize] = useState("1.2rem");
  const [theme, setTheme] = useState("light");

  const themes = {
    light: { background: "#f9f9f9", text: "#222" },
    dark: { background: "#222", text: "#f9f9f9" },
  };

  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://zenquotes.io/api/random");
      const [data] = response.data;
      setQuoteData({ q: data.q, a: data.a });
      setLiked(false);
    } catch (error) {
      setQuoteData({ q: "Failed to fetch quote. Try again!", a: "" });
      setLiked(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: themes[theme].background,
        color: themes[theme].text,
        padding: "2rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        transition: "all 0.3s ease",
      }}
    >
      <h1 style={{ textAlign: "center" }}>QuoteSage - Daily Quote Generator</h1>

      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      <QuoteCard
        quote={quoteData.q}
        author={quoteData.a}
        fontSize={fontSize}
        themeColor={themes[theme]}
        liked={liked}
        onLike={() => setLiked((prev) => !prev)}
      />

      <div style={{ maxWidth: "600px", margin: "1rem auto", textAlign: "center" }}>
        <label>
          Font Size:{" "}
          <select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
            style={{ padding: "0.3rem", marginLeft: "0.5rem" }}
          >
            <option value="1rem">Small</option>
            <option value="1.2rem">Medium</option>
            <option value="1.5rem">Large</option>
            <option value="2rem">Extra Large</option>
          </select>
        </label>
      </div>

      <QuoteButton onClick={fetchQuote} themeColor={themes[theme]}>
        New Quote
      </QuoteButton>
    </div>
  );
}
