import { useState, useEffect } from "react";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(6); // Number of news articles per page

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=apple&from=2025-03-19&to=2025-03-19&sortBy=popularity&apiKey=70e47c542c5c42c5917f4202dbcb20ee"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        const data = await response.json();
        setNews(data.articles.slice(0, 12)); // Limit to 12 articles
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  // Pagination logic
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800"></h2>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="text-red-500 text-center mb-6">
          <p>Error: {error}</p>
          <p>Please try again later.</p>
        </div>
      )}

      {/* News Articles */}
      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentNews.length > 0 ? (
              currentNews.map((article, index) => (
                <div
                  key={index}
                  className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow bg-white"
                >
                  {/* Article Image */}
                  {article.urlToImage && (
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}

                  {/* Article Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {article.title}
                  </h3>

                  {/* Article Description */}
                  <p className="text-gray-600 mb-4">{article.description}</p>

                  {/* Read More Link */}
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Read more
                  </a>
                </div>
              ))
            ) : (
              <p className="text-gray-600 text-center col-span-full">
                No news found.
              </p>
            )}
          </div>

          {/* Pagination */}
          {news.length > newsPerPage && (
            <div className="flex justify-center mt-6">
              {Array.from(
                { length: Math.ceil(news.length / newsPerPage) },
                (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`mx-1 px-3 py-1 rounded ${
                      currentPage === i + 1
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    } hover:bg-blue-500 hover:text-white transition`}
                  >
                    {i + 1}
                  </button>
                )
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NewsPage;