import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import {
  Carousel,
  VideoCard,
  CategoryCard,
  VideoList,
  SortBy,
} from '../../components/components_index';
import {
  useCategory,
  useVideoList,
  useToken,
  useFilter,
} from '../../context/context_index';
import { useDocumentTitle } from '../../hook/hook_index';
import './Homepage.css';
import { LoadingPage } from '../pages_index';

export const Homepage = () => {
  const categoryContainer = useRef(null);

  // const [{ leftScrollBtnDisplay, rightScrollBtnDisplay }, setScrollBtnDisplay] =
  //   useState({});
  const {
    filter: { category, sort },
  } = useFilter();
  const { categoryData } = useCategory();
  const { videoInformation } = useVideoList();

  // const [filteredList, setFilteredList] = useState([]);
  // const { token, setToken } = useToken();

  useDocumentTitle('ArtStudio');

  const scrollOffset = 250;

  const handleHorizontalScroll = (scrollOffset) => {
    categoryContainer.current.scrollLeft += scrollOffset;
    console.log(
      categoryContainer.current.scrollLeft +
        categoryContainer.current.clientWidth,
      categoryContainer.current.scrollWidth
    );

    // if (
    //   categoryContainer.current.scrollLeft + scrollOffset >=
    //   categoryContainer.current.clientWidth
    // ) {
    //   console.log('enter');
    //   setScrollBtnDisplay((prevState) => ({
    //     ...prevState,
    //     rightScrollBtnDisplay: false,
    //   }));
    //   return;
    // }

    // if (categoryContainer.current.scrollLeft + scrollOffset < 0) {
    //   setScrollBtnDisplay((prevState) => ({
    //     ...prevState,
    //     rightScrollBtnDisplay: true,
    //     leftScrollBtnDisplay: false,
    //   }));
    // } else {
    //   setScrollBtnDisplay((prevState) => ({
    //     ...prevState,
    //     leftScrollBtnDisplay: true,
    //     rightScrollBtnDisplay: true,
    //   }));
    // }
  };

  const getSortedData = (data) => {
    let tempSortData = [];
    if (sort.alphabet) {
      tempSortData = data.sort((item1, item2) => {
        if (item1.title.toUpperCase() > item2.title.toUpperCase()) {
          return 1;
        }
        if (item1.title < item2.title) {
          return -1;
        }
        return 0;
      });
    }

    if (sort.date) {
      tempSortData = data.sort((item1, item2) => {
        if (item1.dateUploaded > item2.dateUploaded) {
          return 1;
        }
        if (item1.dateUploaded < item2.dateUploaded) {
          return -1;
        }
        return 0;
      });
    }

    if (sort.ascending) {
      return tempSortData;
    } else {
      return tempSortData.reverse();
    }
  };

  const handleCategorySelect = (category) => {
    if (category === 'all') {
      return getSortedData(videoInformation);
    }
    const data = videoInformation.filter((item) => {
      return item.category == category;
    });
    return getSortedData(data);
  };

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { data } = await axios.post('/api/auth/login', {
  //         email: 'adarshbalika@gmail.com',
  //         password: 'adarshBalika123',
  //       });

  //       localStorage.setItem('token', data.encodedToken);
  //     } catch (e) {
  //       console.error(e);
  //     }

  //     //  setToken(token)
  //   })();
  // }, []);

  useEffect(() => {
    // if (categoryContainer.current.scrollLeft <= 0) {
    //   setScrollBtnDisplay((prevState) => ({
    //     ...prevState,
    //     leftScrollBtnDisplay: false,
    //     rightScrollBtnDisplay: true,
    //   }));
    // }
  }, []);

  const filteredList = handleCategorySelect(category, getSortedData);

  return (
    <div className="homepage-main app">
      {/* <PlaylistModal /> */}
      {/* <SideNavbar /> */}
      <div className="carousel-main-container">
        <Carousel />
      </div>

      <h2>Explore Now</h2>

      <div className="categories-section video-list-section">
        <div className="btn-container scroll-btn-container">
          <button
            className="btn btn-float btn-float-left"
            onClick={() => handleHorizontalScroll(-scrollOffset)}
            // style={{ display: `${leftScrollBtnDisplay ? 'block' : 'none'}` }}
          >
            <span className="fas fa-angle-left categories-left-btn"></span>
          </button>
          <button
            className="btn btn-float btn-float-right"
            onClick={() => handleHorizontalScroll(scrollOffset)}
            // style={{ display: `${rightScrollBtnDisplay ? 'block' : ' none'}` }}
          >
            <span className="fas fa-angle-right categories-right-btn"></span>
          </button>
        </div>
        <div className="linear-gradient-container">
          <div
            // style={{ display: `${leftScrollBtnDisplay ? 'block' : 'none'}` }}
            className="left-gradient"
          ></div>
          <div
            // style={{ display: `${rightScrollBtnDisplay ? 'block' : ' none'}` }}
            className="right-gradient"
          ></div>
        </div>

        <div className="categories-container" ref={categoryContainer}>
          {categoryData.map(({ _id: id, iconSrc, categoryName }) => {
            return (
              <CategoryCard
                key={id}
                iconSrc={iconSrc}
                categoryName={categoryName}
              />
            );
          })}
        </div>
      </div>
      <SortBy />
      <VideoList sectionTitle={''}>
        {filteredList.map((item) => {
          return <VideoCard key={item._id} video={item} />;
        })}
      </VideoList>
    </div>
  );
};
