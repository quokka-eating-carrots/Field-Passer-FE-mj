import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import requestAPI from '../../../api/axios';
import SelectBox from './SelectBox';
import { RootState } from '@src/store/store';
import { getCategoryDistrict, getStadiumList } from '@src/api/request';

const Searchbar = () => {
  const navigate = useNavigate();
  const catagorySelect = useSelector<RootState>((state) => {
    return state.category.catagorySelect;
  });
  const districtSelect = useSelector<RootState>((state) => {
    return state.category.districtSelect;
  });

  const [categoryList, setCategoryList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [stadiumList, setStadiumList] = useState([]);

  useEffect(() => {
    const getCategoryList = async () => {
      const res = await getCategoryDistrict('category');
      setCategoryList(res);
    };

    getCategoryList();
  }, []);

  useEffect(() => {
    if (catagorySelect) {
      const getDistrict = async () => {
        const res = await getCategoryDistrict('district');
        setDistrictList(res);
      };
      getDistrict();
    }
  }, [catagorySelect]);

  useEffect(() => {
    if (districtSelect) {
      const getStadiumList = async () => {
        const res = await requestAPI('stadiumList');
        setStadiumList(res?.data.resultData);
      };
      getStadiumList();
    }
  }, [districtSelect]);

  return (
    <section className='flex my-[20px] justify-center gap-[10px] items-center flex-wrap'>
      <div className='flex gap-[5px] flex-col mm:flex-row'>
        <div className='flex gap-[5px]'>
          <SelectBox id='category' defaultValue='종목' size='w-1/2' options={categoryList} />
          <SelectBox
            id='district'
            defaultValue='지역 전체'
            size='w-1/2'
            options={catagorySelect ? districtList : []}
          />
        </div>
        <SelectBox
          id='stadium'
          defaultValue='구장 전체'
          size='w-[240px]'
          options={districtSelect ? stadiumList : []}
        />
      </div>

      <div className='flex gap-[5px] h-[40px]'>
        <button
          type='submit'
          className='rounded-lg bg-field hover:bg-hoverField text-white text p-3 text-sm'
        >
          검색
        </button>
        <button
          onClick={() => navigate('/posting')}
          className='p-3 rounded-lg bg-field hover:bg-hoverField text-white text-sm'
        >
          양도하기
        </button>
      </div>
    </section>
  );
};

export default Searchbar;
