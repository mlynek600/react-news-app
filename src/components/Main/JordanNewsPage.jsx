import React, { useState, useEffect, useCallback, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./JordanNewsPage.css";
import NewsList from "./HomePage/NewsList/NewsList";
import moment from "moment";
import LanguageContext from "../../LanguageContext";

const JordanNewsPage = () => {
  const [startDate, setStartDate] = useState(
    moment()
      .subtract(1, "months")
      .toDate()
  );
  const [endDate, setEndDate] = useState(moment().toDate());
  const [results, setResults] = useState(null);
  const [page, setPage] = useState(1);
  const [pagesNumber, setPagesNumber] = useState(1);
  const lang = useContext(LanguageContext);

  const fetchArticles = useCallback(() => {
    fetch(
      `http://localhost:4000/jordan?from=${startDate.toISOString()}&to=${endDate.toISOString()}&page=${page}` +
        (lang === "us" ? "" : `&language=${lang}`)
    )
      .then(response => response.json())
      .then(res => {
        setResults(res);
        setPagesNumber(Math.ceil(res.totalResults / 15));
      });
  }, [startDate, endDate, page, lang]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return (
    <div className="JordanNewsPage">
      <div className="date">
        <div>
          <label>Start date:</label>
          <DatePicker
            selected={startDate}
            onChange={setStartDate}
            dateFormat="dd-MM-yyyy"
            maxDate={endDate}
          />
        </div>
        <div>
          <label>End date:</label>
          <DatePicker
            selected={endDate}
            onChange={setEndDate}
            dateFormat="dd-MM-yyyy"
            maxDate={new Date()}
            minDate={startDate}
          />
        </div>
      </div>
      {results ? (
        <NewsList
          articles={results.articles}
          pagesNumber={pagesNumber}
          onPageChange={page => setPage(page)}
        />
      ) : null}
    </div>
  );
};
export default JordanNewsPage;
