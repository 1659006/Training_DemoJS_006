function TinhToan()
{
	var PhanSo_1=document.getElementById('PS1').value;
	var PhanSo_2=document.getElementById('PS2').value;
	var Ketqua_element=document.getElementById('KETQUA');
	var PhepTinh=document.getElementById('Pheptinh').value;

	var PS1_tu=parseInt(PhanSo_1.split('/')[0]);
	var PS1_mau=parseInt(PhanSo_1.split('/')[1]);

	var PS2_tu=parseInt(PhanSo_2.split('/')[0]);
	var PS2_mau=parseInt(PhanSo_2.split('/')[1]);

	var KETQUA_TU=0;
	var KETQUA_MAU=0;
	switch(PhepTinh)
	{
		case '+':
			KETQUA_TU=(PS1_tu*PS2_mau) + (PS2_tu*PS1_mau);
			KETQUA_MAU=PS1_mau*PS2_mau;
		break;
		case'-':
			KETQUA_TU=(PS1_tu*PS2_mau) - (PS2_tu*PS1_mau);
			KETQUA_MAU=PS1_mau*PS2_mau;
		break;
		case '*':
			KETQUA_TU=PS1_tu*PS2_tu;
			KETQUA_MAU=PS1_mau*PS2_mau;
		break;
		case'/':
			KETQUA_TU=PS1_tu*PS2_mau;
			KETQUA_MAU=PS1_mau*PS2_tu;
		break;
	}
	Ketqua_element.value=KETQUA_TU + "/" + KETQUA_MAU;

}