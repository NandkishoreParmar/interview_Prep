import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function CharacterBrowser() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const currentPageRef = useRef(1);
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 10;

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${currentPageRef.current}`
        );
        
        setCharacters(response.data.results);
        setTotalPages(Math.ceil(response.data.info.count / charactersPerPage));
        setError(null);
      } catch (err) {
        setError('Failed to fetch characters. Please try again later.');
        setCharacters([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    currentPageRef.current = newPage;
    setCurrentPage(newPage);
  };

  // Styles
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  };

  const loadingStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '200px'
  };

  const spinnerStyle = {
    border: '5px solid #f3f3f3',
    borderTop: '5px solid #42b5cb',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 1s linear infinite'
  };

  const errorStyle = {
    color: 'red',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#ffecec',
    borderRadius: '5px'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    margin: '30px 0'
  };

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.2s'
  };

  const cardHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
  };

  const imgStyle = {
    width: '100%',
    height: '250px',
    objectFit: 'cover'
  };

  const infoStyle = {
    padding: '15px'
  };

  const paginationStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '5px',
    marginTop: '30px'
  };

  const buttonStyle = {
    padding: '8px 15px',
    border: '1px solid #ddd',
    backgroundColor: 'white',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'all 0.2s'
  };

  const buttonHoverStyle = {
    backgroundColor: '#f0f0f0'
  };

  const activeButtonStyle = {
    backgroundColor: '#42b5cb',
    color: 'white',
    borderColor: '#42b5cb'
  };

  const disabledButtonStyle = {
    opacity: '0.5',
    cursor: 'not-allowed'
  };

  if (loading && characters.length === 0) {
    return (
      <div style={loadingStyle}>
        <div style={spinnerStyle}></div>
        <p>Loading characters...</p>
      </div>
    );
  }

  if (error) {
    return <div style={errorStyle}>{error}</div>;
  }

  return (
    <div style={containerStyle}>
      <h1>Rick and Morty Characters</h1>
      
      <div style={gridStyle}>
        {characters.map((character) => (
          <div 
            key={character.id} 
            style={{
              ...cardStyle,
              ':hover': cardHoverStyle
            }}
          >
            <img 
              src={character.image} 
              alt={character.name} 
              style={imgStyle} 
            />
            <div style={infoStyle}>
              <h3>{character.name}</h3>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              <p>Origin: {character.origin.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={paginationStyle}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{
            ...buttonStyle,
            ...(currentPage === 1 ? disabledButtonStyle : {}),
            ':hover': buttonHoverStyle
          }}
        >
          Previous
        </button>
        
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            style={{
              ...buttonStyle,
              ...(page === currentPage ? activeButtonStyle : {}),
              ':hover': buttonHoverStyle
            }}
          >
            {page}
          </button>
        ))}
        
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{
            ...buttonStyle,
            ...(currentPage === totalPages ? disabledButtonStyle : {}),
            ':hover': buttonHoverStyle
          }}
        >
          Next
        </button>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default CharacterBrowser;