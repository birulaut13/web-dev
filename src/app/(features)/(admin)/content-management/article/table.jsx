import Image from "next/image";
import Td from "../components/table/td";
import Thead from "../components/table/thead";
import { useEffect, useState } from "react";
import {
  fetchArticles,
  updateArticle,
  deleteArticle,
} from "./service/article.service"; // Import deleteArticle
import { convertDate } from "@/app/service/convertDate.service";

export default function TableArticle() {
  const [articles, setArticles] = useState(null);

  // Fetch articles data from the server
  const fetchData = async () => {
    const response = await fetchArticles();
    setArticles(response);
  };

  // Update article data
  const updateArticleData = async (id, data) => {
    const response = await updateArticle(id, data);
    console.log("response:", response);
  };

  // Delete an article by ID
  const handleDelete = async (id) => {
    const response = await deleteArticle(id);
    if (response) {
      // Remove the deleted article from the state
      setArticles(articles.filter((article) => article.id !== id));
    }
  };

  // Fetch articles when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <table className="w-full table-fixed">
        <Thead />
        <tbody>
          {articles?.map((article) => (
            <tr key={article.id}>
              <Td>
                <Image
                  src="/img/admin/image.png"
                  alt=""
                  width={176}
                  height={114}
                />
                {/* <Image
                  src={article.thumbnail_url}
                  alt={article.title}
                  width={176}
                  height={114}
                /> */}
              </Td>
              <Td>{article.title}</Td>
              <Td>{convertDate(article.created_date)}</Td>
              <Td>24 Penayangan</Td>
              <Td>{article.categoryId}</Td>
              <Td>
                <select
                  name="order"
                  id="order"
                  className="w-full px-3 py-2 rounded-[4px]"
                  value={article.article_order}
                  onChange={(e) => {
                    const updatedData = {
                      ...article, // Using previous article data
                      article_order: e.target.value, // Only updating the order
                    };
                    updateArticleData(article.id, updatedData); // Send complete object
                  }}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </Td>
              <Td>
                <div className="flex gap-4">
                  <a href="" className="text-blue-500 underline">
                    Edit
                  </a>
                  <a
                    href="#"
                    className="text-red-500 underline"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default link behavior
                      handleDelete(article.id); // Call delete function
                    }}
                  >
                    Hapus
                  </a>
                </div>
              </Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
