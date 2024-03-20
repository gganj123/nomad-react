import React from 'react';
import './DetailPage.css';
/* 필요한 모듈을 추가로 import 해주세요. */
import { Link, useParams } from 'react-router-dom';

export default function DetailPage() {
  /* params 객체를 생성하세요 */
  const params = useParams();
  /* 생성된 params 객체에서 각 id에 매칭되는 값을 가져오세요 */
  const name = params.name;
  const phone = params.phone;
  const addr = params.addr;
  return (
    <div className="detailpage">
      <div className="detailpage-header">DetailPage</div>
      <div className="detailpage-content">
        <div>
          name:
          <span>
            {/* 받아온 이름 정보를 출력하세요. */}
            {name}
          </span>
        </div>
        <div>
          phone:
          <span>
            {/* 받아온 번호 정보를 출력하세요. */}
            {phone}
          </span>
        </div>
        <div>
          addr:
          <span>
            {/* 받아온 주소 정보를 출력하세요. */}
            {addr}
          </span>
        </div>
      </div>
      <div className="detailpage-footer">
        <Link to="/List">Back</Link>
      </div>
    </div>
  );
}
