import Image from "next/image";
import Color from "../../const/color";
import Td from "../components/table/td";
import Th from "../components/table/th";
import Thead from "../components/table/thead";
import { useEffect, useState } from "react";
import { fetchVideos, updateVideo } from "./service/video.service";
import { convertDate } from "@/app/service/convertDate.service";

export default function TableVideo() {
  const [videos, setVideos] = useState(null);

  const fetchData = async () => {
    const response = await fetchVideos();
    setVideos(response);
  };

  const updateVideoData = async (id, data) => {
    const response = await updateVideo(id, data);
    console.log("response:", response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <table className="w-full table-fixed">
        <Thead />
        <tbody>
          {videos?.map((video) => (
            <tr key={video.id}>
              <Td>
                <Image
                  src="/img/admin/image.png"
                  alt=""
                  width={176}
                  height={114}
                />
                {/* <Image
                  src={video.thumbnail_url}
                  alt={video.title}
                  width={176}
                  height={114}
                /> */}
              </Td>
              <Td>{video.title}</Td>
              <Td>{convertDate(video.upload_date)}</Td>
              <Td>24 Penayangan</Td>
              <Td>{video.categoryId}</Td>
              <Td>
                <select
                  name="order"
                  id="order"
                  className="w-full px-3 py-2 rounded-[4px]"
                  value={video.video_order}
                  onChange={(e) => {
                    const updatedData = {
                      ...video,
                      video_order: e.target.value,
                    };
                    updateVideoData(video.id, updatedData);
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
                  <a href="" className="text-red-500 underline">
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
