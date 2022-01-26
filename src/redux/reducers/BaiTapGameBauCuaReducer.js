const initialState = {
  danhSachCuoc: [
    { ma: "bau", hinhAnh: "./img/bau.png", diemCuoc: 0 },
    { ma: "ca", hinhAnh: "./img/ca.png", diemCuoc: 0 },
    { ma: "cua", hinhAnh: "./img/cua.png", diemCuoc: 0 },
    { ma: "ga", hinhAnh: "./img/ga.png", diemCuoc: 0 },
    { ma: "nai", hinhAnh: "./img/nai.png", diemCuoc: 0 },
    { ma: "tom", hinhAnh: "./img/tom.png", diemCuoc: 0 },
  ],
  tongDiem: 1000,
  mangXucXac: [
    { ma: "nai", hinhAnh: "./img/nai.png"},
    { ma: "ca", hinhAnh: "./img/ca.png" },
    { ma: "tom", hinhAnh: "./img/tom.png"},
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

